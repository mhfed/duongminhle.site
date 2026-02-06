import { NextRequest, NextResponse } from 'next/server';

function checkBasicAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }

  try {
    const base64Credentials = authHeader.split(' ')[1];
    // Sử dụng atob để an toàn hơn trên Edge Runtime
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(':');

    const adminUser = process.env.ADMIN_USER;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUser || !adminPassword) {
      console.error('Missing ENV variables');
      return false;
    }

    return username === adminUser && password === adminPassword;
  } catch (e) {
    return false;
  }
}

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/admin')) {
    if (!checkBasicAuth(request)) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/admin'],
};
