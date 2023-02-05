import {SpotifyLogo} from 'phosphor-react'
import { GetServerSideProps } from "next";
import { ClientSafeProvider, getProviders, signIn as signIntoProvider } from "next-auth/react";
 interface LoginProps{
    providers: Awaited<ReturnType<typeof getProviders>>
 }

export default function Login({providers}:LoginProps){
    const { name: providerName, id:providerId } = providers?.spotify as ClientSafeProvider

    return(
        <div className='flex flex-col items-center justify-center bg-black min-h-screen w-full'>
            <SpotifyLogo className='w-40 h-40 text-green-500' />
            <button className='bg-[#18D860] text-white p-5 rounded-full transition ease-in delay-45 hover:brightness-75' onClick={() => {signIntoProvider(providerId, { callbackUrl: '/' })}}>
                Login with {providerName}
            </button>
        </div>                 
    )
}

export const getServerSideProps: GetServerSideProps<LoginProps> = async context => {
	const providers = await getProviders()
	return {
		props: {
			providers
		}
	}
}