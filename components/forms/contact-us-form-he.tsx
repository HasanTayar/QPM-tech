"use client";
import React from "react";
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

const ContactUsFormHe = () => {
  const form = useForm<z.infer<typeof ContactUsSchemaEN>>({
    resolver: zodResolver(ContactUsSchemaEN),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof ContactUsSchemaEN>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="container mx-auto" dir="rtl">
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
                  <p className="bold text-red-500">*</p> שם
                </FormLabel>
                <FormControl>
                  <Input placeholder="השם שלכה" {...field} />
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
                  <p className="bold text-red-500">*</p> איימ״ל
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
                  <p className="bold text-red-500">*</p> הודעה
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="הודעה שלכה " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className=" text-white py-2 px-4 rounded hover:bg-purple-600 w-52 h-10"
            >
              שלח הודעה
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default ContactUsFormHe;
