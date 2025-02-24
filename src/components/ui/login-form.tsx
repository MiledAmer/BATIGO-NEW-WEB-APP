import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/hooks/useLogin';
import { useForm } from 'react-hook-form';

interface LoginFormProps extends React.ComponentPropsWithoutRef<'form'> {
  className?: string;
}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const { register, handleSubmit } = useForm<{ email_u: string; password: string }>();
  const { mutate: login, isPending } = useLogin();

  const onSubmit = (data: { email_u: string; password: string }) => {
    login(data);
  };

  return (
    <form className={cn('flex flex-col gap-6', className)} onSubmit={handleSubmit(onSubmit)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required {...register('email_u')} />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required {...register('password')} />
        </div>
        <div className='flex flex-col gap-2'>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </Button>
        <Button  type="submit" className="w-full bg-red-600" disabled={isPending}>
          {isPending ? 'Registering...' : 'Register'}
        </Button>
        </div>
      </div>
    </form>
  );
}