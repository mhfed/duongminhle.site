import { NextRequest, NextResponse } from 'next/server';

function checkBasicAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString(
    'utf-8',
  );
  const [username, password] = credentials.split(':');

  const adminUser = process.env.ADMIN_USER;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUser || !adminPassword) {
    console.error(
      'ADMIN_USER or ADMIN_PASSWORD environment variables are not set',
    );
    return false;
  }

  return username === adminUser?.trim() && password === adminPassword?.trim();
}

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Handle /admin routes
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
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
