interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/hello') {
      return Response.json({ message: 'Hello from the aaron-cloudflare Worker!' })
    }

    return env.ASSETS.fetch(request)
  },
}
