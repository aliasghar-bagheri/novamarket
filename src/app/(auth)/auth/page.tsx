'use client';

import { toast } from 'sonner';
import Logo from '@/components/shared/icons/Logo';
import { useEffect, useState } from 'react';
import OTPVerificationForm from './_components/OTPVerificationForm';
import OTPSubmissionForm from './_components/OTPSubmissionForm';
import { handleError } from '@/util/handleError';
import { useGetOTP } from '@/hooks/auth/useGetOTP';
import { useCheckOTP } from '@/hooks/auth/useCheckOTP';
import { useRouter } from 'next/navigation';
import { OTP_RESEND_TIME } from '@/constants';

type FormStep = 'GET_CODE' | 'CHECK_CODE';

export default function AuthPage() {
  const [step, setStep] = useState<FormStep>('GET_CODE');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [time, setTime] = useState(OTP_RESEND_TIME);
  const [otp, setOtp] = useState('');

  const { data: otpResponse, mutateAsync: getOTP, isPending: isGetting } = useGetOTP();
  const { mutateAsync: checkOTP, isPending: isChecking } = useCheckOTP();

  const router = useRouter();

  const handleSendOTP = async () => {
    try {
      const { message } = await getOTP({ phoneNumber });

      toast.success(message);
      setOtp('');
      setTime(OTP_RESEND_TIME);
      setStep('CHECK_CODE');
    } catch (error) {
      console.log(error);

      const message = handleError(error);
      toast.error(message);
    }
  };

  const handleCheckOTP = async () => {
    try {
      const { message, user } = await checkOTP({ otp, phoneNumber });

      toast.success(message);

      if (!user.isActive) return router.push('/complete-profile');

      router.push('/');
    } catch (error) {
      const message = handleError(error);
      toast.error(message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      step === 'CHECK_CODE' &&
      setInterval(() => {
        setTime((curr) => curr - 1);
      }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time, step]);

  const render = () => {
    switch (step) {
      case 'GET_CODE': {
        return (
          <OTPSubmissionForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            sendOTPAction={handleSendOTP}
            isPending={isGetting}
          />
        );
      }
      case 'CHECK_CODE': {
        return (
          <OTPVerificationForm
            otpResponse={otpResponse}
            onResendOtp={handleSendOTP}
            onBack={() => setStep('GET_CODE')}
            otp={otp}
            setOtp={(otp) => setOtp(otp)}
            verificationAction={handleCheckOTP}
            isPending={isChecking}
            time={time}
          />
        );
      }
    }
  };

  return (
    <div className="flex max-w-md sm:bg-secondary-0/60 sm:backdrop-blur-xl sm:shadow p-3 sm:p-6 sm:rounded-xl w-full flex-col gap-y-5 items-center">
      <Logo />
      {render()}
      <p className="text-secondary-600 text-sm text-center">
        ورود شما به معنای پذیرش شرایط نوا مارکت و قوانین حریم خصوصی است
      </p>
    </div>
  );
}
