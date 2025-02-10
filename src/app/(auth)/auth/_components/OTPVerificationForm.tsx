import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { ArrowRight, Edit2 } from 'lucide-react';
import React from 'react';
import OTPInput from 'react-otp-input';

interface OTPVerificationFormProps {
  verificationAction: () => void | Promise<void>;
  otp: string;
  otpResponse?: { message: string };
  onBack: () => void;
  setOtp: (otp: string) => void;
  time: number;
  onResendOtp: () => void;
  isPending: boolean;
}

export default function OTPVerificationForm({
  verificationAction,
  otpResponse,
  onBack,
  onResendOtp,
  time,
  otp,
  setOtp,
  isPending,
}: OTPVerificationFormProps) {
  return (
    <fieldset
      className="w-full"
      disabled={isPending}
    >
      <form
        action={verificationAction}
        className="space-y-3"
      >
        <Button
          type="button"
          onClick={onBack}
          className="px-0"
        >
          <ArrowRight />
          برگشت
        </Button>
        <h3 className="text-xl my-5 font-semibold">کد تایید را وارد کنید</h3>
        <div className="space-y-3">
          {otpResponse && (
            <p className="text-sm flex items-center gap-2">
              {otpResponse?.message}
              <span
                className="text-primary-500 cursor-pointer"
                onClick={onBack}
              >
                <Edit2 size={16} />
              </span>
            </p>
          )}
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0 8px',
              direction: 'ltr',
            }}
            renderInput={(props) => (
              <Input
                {...props}
                type="number"
                className="flex-1 max-w-14 py-3 text-base"
                name="otp"
                id="otp"
              />
            )}
            shouldAutoFocus
          />
        </div>
        <div className="text-sm text-center">
          {time > 0 ? (
            <p className="py-2">{time} ثانیه مانده تا دریافت مجدد کد</p>
          ) : (
            <Button
              onClick={onResendOtp}
              type="button"
              variant="link"
              className="px-0"
            >
              دریافت مجدد کد
            </Button>
          )}
        </div>
        <Button
          variant="primary"
          disabled={!otp || otp.length < 6}
          isLoading={isPending}
          fullWidth
        >
          تایید
        </Button>
      </form>
    </fieldset>
  );
}
