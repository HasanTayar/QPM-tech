"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactUsSchemaHe } from "@/schemas";
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

const ContactUsFormHe = () => {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof ContactUsSchemaHe>>({
    resolver: zodResolver(ContactUsSchemaHe),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof ContactUsSchemaHe>) {
    try {
      setLoading(true);
      const data = JSON.stringify(values);
      const res = await axios.post("/api/email/contact/he", data);
      if (res.status === 200) {
        return toast({
          variant: "success",
          title: "בקשת הקשר שלך",
          description: "נשלחה בהצלחה",
        });
      } else {
        return toast({
          variant: "destructive",
          title: "אופס! משהו השתבש.",
          description: "הייתה בעיה בבקשה שלך.",
        });
      }
    } catch (error) {
      setLoading(false);
      return toast({
        variant: "destructive",
        title: "אופס! משהו השתבש.",
        description: "הייתה בעיה בבקשה שלך.",
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="bold text-red-500">*</p> מספר טלפון
                </FormLabel>
                <FormControl>
                  <Input placeholder="מספר טלפון שלכה" {...field} />
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
              disabled={loading}
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
