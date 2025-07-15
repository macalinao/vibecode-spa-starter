import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { RegistrationForm } from "@/components/forms/registration-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createLazyFileRoute("/demo")({
  component: DemoPage,
});

function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Demo Components</h1>
          <p className="text-muted-foreground mt-2">
            Example forms built with react-hook-form, Zod validation, and
            shadcn/ui components.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
              <CardDescription>
                Create a new account with validation for all fields.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegistrationForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                Get in touch with us using this contact form.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
