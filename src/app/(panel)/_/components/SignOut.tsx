'use client';

import Button from '@/components/ui/Button';
import { useSignOut } from '@/hooks/auth/useSignOut';
import { LogOutIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function SignOut() {
  const [isClient, setIsClient] = useState(false);
  const { mutateAsync: signOut } = useSignOut();
  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <Button
        onClick={handleSignOut}
        className="mt-auto !justify-start text-error"
        type="button"
        fullWidth
      >
        <LogOutIcon />
        خروج
      </Button>
    )
  );
}
