import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';

export default function OTPSubmissionForm({
  phoneNumber,
  setPhoneNumber,
  sendOTPAction,
  isPending,
}: {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  sendOTPAction: (formData: FormData) => void | Promise<void>;
  isPending: boolean;
}) {
  return (
    <>
      <p className="text-secondary-500 font-semibold text-sm">ورود | ثبت نام</p>
      <fieldset
        disabled={isPending}
        className="w-full"
      >
        <form
          action={sendOTPAction}
          className="w-full space-y-5"
        >
          <div>
            <Label htmlFor="phoneNumber">شماره موبایل</Label>
            <Input
              type="number"
              className="block mt-3 w-full text-base"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              autoFocus
              required
            />
          </div>
          <Button
            variant="primary"
            isLoading={isPending}
            fullWidth
          >
            ورود
          </Button>
        </form>
      </fieldset>
    </>
  );
}
