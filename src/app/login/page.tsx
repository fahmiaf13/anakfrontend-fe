import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@/components";
import React from "react";

export default function Login() {
  return (
    <main>
      <section className="h-full justify-center flex items-center">
        <Card className="border p-5 w-1/4 flex flex-col gap-3">
          <h3 className="text-center text-2xl">Login</h3>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="example@gmail.com" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="8 characters or more" />
          </div>
          <Button className="w-full">Submit</Button>
          <h4 className="text-center">or login with</h4>
          <div className="w-full flex justify-center gap-3">
            <Button variant="outline">
              <Icon icon="devicon:google" width={18} />
            </Button>
            <Button variant="outline">
              <Icon icon="devicon:facebook" width={18} />
            </Button>
            <Button variant="outline">
              <Icon icon="devicon:github" width={18} />
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
