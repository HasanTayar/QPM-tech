"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactUsSchemaEN } from "@/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { toast } from "../ui/use-toast";

const ContactUsFormEn = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof ContactUsSchemaEN>>({
    resolver: zodResolver(ContactUsSchemaEN),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof ContactUsSchemaEN>) {
    try {
      setLoading(true);
      const data = JSON.stringify(values);
      const res = await axios.post("/api/email/contact/en", data);
      if (res.status === 200) {
        return toast({
          variant: "success",
          title: "Your contact request",
          description: "has been sent successfully",
        });
      } else {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    } catch (error) {
      setLoading(false);
      return toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
      form.reset({
        message: "",
        email: "",
        name: "",
        phone: "",
      });
    }
  }

  return (
    <section className="container mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 m-4 p-4 md:m-8 md:p-8 lg:m-12 lg:p-12 border shadow bg-white rounded"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="bold text-red-500">*</p> Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="bold text-red-500">*</p> Phone
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="bold text-red-500">*</p> Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="bold text-red-500">*</p> Message
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Your Message here " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className=" text-white py-2 px-4 rounded hover:bg-purple-600 w-52 h-10"
              disabled={loading}
            >
              Send Message
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default ContactUsFormEn;
