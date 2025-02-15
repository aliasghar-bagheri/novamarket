'use client';

import Image from 'next/image';
import {
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDropzone } from 'react-dropzone';
import Button from './Button';
import clsx from 'clsx';
import { z, ZodError } from 'zod';
import { toast } from 'sonner';
import { CloudUploadIcon, XIcon } from 'lucide-react';
import { withFormField } from '../HOC/withFormField';
import { handleError } from '@/util/handleError';
import Input from './Input';
import CircularProgress from './CircularProgress';
import { uploadProductImageApi } from '@/services/admin.service';

interface ImageDropzoneProps extends InputHTMLAttributes<HTMLInputElement> {
  initialValue?: string;
  className?: string;
  onChangeFile: (imageLink?: string) => void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ImageSchema = z
  .instanceof(File)
  .refine((file) => file.size <= MAX_FILE_SIZE, { message: 'حجم فایل باید کمتر از 5 مگابایت باشد' })
  .refine((file) => ['image/png', 'image/jpg', 'image/jpeg', 'image/svg'].includes(file.type), {
    message: 'فرمت عکس محصول معتبر نیست',
  });

const ImageDropzone = forwardRef<HTMLInputElement, ImageDropzoneProps>(
  ({ initialValue, onChangeFile, className, ...props }, ref) => {
    const [imageUrl, setImageUrl] = useState<string>(initialValue || '');
    const [file, setFile] = useState<File | undefined>();
    const [progressUpload, setProgressUpload] = useState(0);

    const onDrop = useCallback((acceptedFiles: File[]) => {
      try {
        const file = acceptedFiles[0];
        ImageSchema.parse(file);

        const fileUrl = URL.createObjectURL(file);

        setImageUrl(fileUrl);

        setFile(file);
      } catch (error) {
        const message = error instanceof ZodError ? error.issues[0].message : handleError(error);
        toast.error(message);
      }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

    const removeFile = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setImageUrl('');
      onChangeFile();
    };

    useEffect(() => {
      if (!file) {
        return;
      }
      const uploadImageFile = async () => {
        try {
          const { data } = await uploadProductImageApi(file, setProgressUpload);

          onChangeFile(data.url);
        } catch (error) {
          const message = handleError(error);
          toast.error(message);
        } finally {
          setProgressUpload(0);
          setFile(undefined);
        }
      };

      uploadImageFile();
    }, [file]);

    return (
      <div
        ref={ref}
        className={clsx(
          'relative w-full flex border border-secondary-300 bg-secondary-200 h-60 flex-col items-center justify-center overflow-hidden rounded transition-all',
          className,
          {
            'bg-secondary-300': isDragActive,
          }
        )}
        {...getRootProps(props)}
      >
        <Input
          {...props}
          {...getInputProps()}
        />
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              fill
              alt="image"
              className="object-cover"
            />
            <Button
              onClick={removeFile}
              variant="secondary"
              className="absolute right-3 top-3 p-2"
            >
              <XIcon />
            </Button>
            {file && (
              <CircularProgress
                className="absolute bottom-5 right-5"
                percentage={progressUpload}
              />
            )}
          </>
        ) : (
          <>
            <CloudUploadIcon
              width={70}
              height={70}
              className="bg-primary-100 text-primary-500 p-3 rounded-full"
            />
            <div className="text-center p-3 space-y-3">
              <p className="text-sm text-secondary-900 font-semibold">
                برای آپلود فایل{' '}
                <span className="text-primary-500 font-semibold">اینجا کلیک کنید </span>
                یا فایل را بکشید و رها کنید
              </p>
              <p className="text-center text-xs text-secondary-600">
                فرمت پشتیبانی شده: PNG, SVG, JPG, JPEG (حداکثر 5 مگابایت)
              </p>
            </div>
          </>
        )}
      </div>
    );
  }
);

ImageDropzone.displayName = 'Dropzone';

export default withFormField(ImageDropzone);
