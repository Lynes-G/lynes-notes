import AuthForm from "@/components/AuthForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SignUp() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle className="text-center text-2xl">Sign up</CardTitle>
        </CardHeader>
        <AuthForm type="signup" />
      </Card>
    </div>
  );
}

export default SignUp;
