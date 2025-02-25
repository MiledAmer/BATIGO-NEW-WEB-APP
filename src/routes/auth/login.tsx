import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '@/components/ui/login-form'
import authImg from "@/assets/authimg1.jpg"
import Batigoicon from "@/assets/Batigoicon.png"


export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
      <img
        src={authImg}
        alt="Image"
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <a href="#" className="flex items-center gap-2 font-medium">
          <img 
            src={Batigoicon}
            alt="Batigo ICON"
            className='h-9'
          />
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
  )
}
