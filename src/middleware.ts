// middleware.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextApiRequest) => {
	// If user is logged in, token will exist
	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET as string
	})
	console.log('code', token)

	const { pathname } = reqRes.nextUrl

	// Allow request if (1) token exists
	// OR (2) it is a request for NextAuth session & provider
	// OR (3) it is a request to '/_next' (/_next/static/)
	if (token || pathname.includes('/api/auth') || pathname.includes('/_next')) {
		if (pathname === '/login') {
			return NextResponse.redirect(new URL('/', request.url))
		}

		return NextResponse.next()
	}

	// Redirect to login if (1) user doesn't have a token AND (2) is requesting protected route
	if (!token && pathname !== '/login') {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	return NextResponse.next()
}