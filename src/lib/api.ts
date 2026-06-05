const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "http://localhost:5000";

export function getImageUrl(path: string | string[] | null | undefined): string {
  if (!path) return "/images/placeholder.png";
  const raw = Array.isArray(path) ? path[0] : path;
  if (!raw) return "/images/placeholder.png";
  if (raw.startsWith("http")) return raw;
  return `${IMAGE_BASE}${raw.startsWith("/") ? "" : "/"}${raw}`;
}

function buildUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("muliya_auth_token");
}

async function parseResponse<T>(res: Response): Promise<T> {
  const ct = res.headers.get("content-type") ?? "";
  const body = ct.includes("application/json")
    ? await res.json().catch(() => null)
    : await res.text().catch(() => "");

  if (!res.ok) {
    const msg =
      (body && typeof body === "object" && (body.message || body.error)) ||
      (typeof body === "string" && body) ||
      `Request failed (${res.status})`;
    const err: Error & { status?: number } = new Error(String(msg).slice(0, 500));
    err.status = res.status;
    throw err;
  }
  return body as T;
}

export async function apiRequest<T = unknown>(
  path: string,
  options: {
    method?: string;
    body?: unknown;
    headers?: Record<string, string>;
    auth?: boolean;
  } = {}
): Promise<T> {
  const { method = "GET", body, headers = {}, auth = false } = options;
  const token = getToken();

  const finalHeaders: Record<string, string> = {
    ...(body instanceof FormData ? {} : { "Content-Type": "application/json" }),
    ...(auth && token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };

  let res: Response;
  try {
    res = await fetch(buildUrl(path), {
      method,
      headers: finalHeaders,
      body: body == null ? undefined : body instanceof FormData ? body : JSON.stringify(body),
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Network request failed";
    throw new Error(msg);
  }

  return parseResponse<T>(res);
}

export const api = {
  get: <T = unknown>(path: string, auth = false) =>
    apiRequest<T>(path, { method: "GET", auth }),
  post: <T = unknown>(path: string, body: unknown, auth = false) =>
    apiRequest<T>(path, { method: "POST", body, auth }),
  put: <T = unknown>(path: string, body: unknown, auth = false) =>
    apiRequest<T>(path, { method: "PUT", body, auth }),
  delete: <T = unknown>(path: string, auth = false) =>
    apiRequest<T>(path, { method: "DELETE", auth }),
};
