"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert } from "@/components/ui/alert";

//  تعریف اعتبارسنجی Yup
const validationSchema = Yup.object({
  mobile: Yup.string()
    .required("شماره موبایل الزامی است")
    .matches(
      /^(09\d{9}|\+989\d{9}|00989\d{9})$/,
      "فرمت شماره موبایل معتبر نیست"
    ),
  password: Yup.string()
    .required("رمز عبور الزامی است")
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
      remember: false,
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      setSuccess(false);

      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        console.log("Form Data:", values);
      }, 1500);
    },
  });

  return (
    <div className="bg-custom-dark min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md animate-fade-in">
        <h1 className="text-2xl font-bold text-center mb-6">ورود</h1>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* موبایل */}
          <div className="space-y-1">
            <Label htmlFor="mobile">شماره موبایل</Label>
            <Input
              id="mobile"
              name="mobile"
              type="text"
              placeholder="مثال: 09123456789"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
            )}
          </div>

          {/* رمز عبور */}
          <div className="space-y-1">
            <Label htmlFor="password">رمز عبور</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          {/* مرا به خاطر بسپار */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formik.values.remember}
                onCheckedChange={(checked) =>
                  formik.setFieldValue("remember", checked)
                }
              />
              <Label htmlFor="remember" className="cursor-pointer">
                مرا به خاطر بسپار
              </Label>
            </div>
            <a
              href="#"
              className="text-gray-600 hover:text-customYellow transition-colors duration-200"
            >
              فراموشی رمز عبور؟
            </a>
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "در حال ورود..." : "ورود"}
          </Button>
        </form>

        {success && (
          <Alert variant="default" className="mt-4">
            ورود موفقیت‌آمیز بود!
          </Alert>
        )}
      </div>
    </div>
  );
}
