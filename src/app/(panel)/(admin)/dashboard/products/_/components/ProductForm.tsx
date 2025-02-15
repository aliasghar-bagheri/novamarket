'use client';

import Button from '@/components/ui/Button';
import { productSchema, ProductSchemaType } from '@/lib/validations/product';
import { I_Product } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/ui/Input';
import { Controller, useForm } from 'react-hook-form';
import Textarea from '@/components/ui/Textarea';
import { useCategories } from '@/hooks/useCategories';
import Select, { Option } from '@/components/ui/Select';
import ImageDropzone from '@/components/ui/ImageDropzone';
import TagsInput from '@/components/ui/TagsInput';
import { useCreateProduct, useUpdateProduct } from '@/hooks/useProduct';
import { handleError } from '@/util/handleError';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type FormFieldType = 'text' | 'textarea' | 'number' | 'select';

interface FormField {
  label: string;
  name: keyof ProductSchemaType;
  type: FormFieldType;
}

const formFields: FormField[] = [
  {
    label: 'عنوان',
    name: 'title',
    type: 'text',
  },
  {
    label: 'توضیحات',
    name: 'description',
    type: 'textarea',
  },
  {
    label: 'اسلاگ',
    name: 'slug',
    type: 'text',
  },
  {
    label: 'برند',
    name: 'brand',
    type: 'text',
  },

  {
    label: 'تعداد موجودی',
    name: 'countInStock',
    type: 'number',
  },
  {
    label: 'دسته بندی',
    name: 'category',
    type: 'select',
  },
  {
    label: 'قیمت',
    name: 'price',
    type: 'number',
  },
  {
    label: 'مقدار تخفیف',
    name: 'discount',
    type: 'number',
  },
  {
    label: 'قیمت تخفیف خورده',
    name: 'offPrice',
    type: 'number',
  },
];

export default function ProductForm({ initialData }: { initialData?: I_Product }) {
  const { transformedCategories: categories, isPending } = useCategories();

  const { mutateAsync: createProduct, isPending: isCreating } = useCreateProduct();
  const { mutateAsync: updateProduct, isPending: isUpdating } = useUpdateProduct();

  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ProductSchemaType>({
    resolver: zodResolver(productSchema),
    mode: 'onTouched',
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description,
      brand: initialData?.brand || '',
      countInStock: initialData?.countInStock || 0,
      imageLink: initialData?.imageLink || '',
      category: initialData?.category._id ?? '',
      discount: initialData?.discount || 0,
      offPrice: initialData?.offPrice || 0,
      price: initialData?.price || 0,
      slug: initialData?.slug || '',
      tags: initialData?.tags || [],
    },
  });

  const handleProductForm = async (values: ProductSchemaType) => {
    if (initialData) {
      try {
        const { message } = await updateProduct({
          productId: initialData._id,
          productData: values,
        });
        toast.success(message);
        router.push('/dashboard/products');
      } catch (error) {
        const message = handleError(error);
        toast.error(message);
      }
    } else {
      try {
        const { message } = await createProduct(values);
        toast.success(message);
        router.push('/dashboard/products');
      } catch (error) {
        const message = handleError(error);
        toast.error(message);
      }
    }
  };

  return (
    <fieldset className="max-w-3xl">
      <form
        onSubmit={handleSubmit(handleProductForm)}
        className="space-y-4"
      >
        <Controller
          name="imageLink"
          control={control}
          rules={{ required: 'عکس محصول الزامی است' }}
          render={({ field }) => (
            <ImageDropzone
              initialValue={field.value}
              onChangeFile={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              error={errors.imageLink?.message}
              name="imageLink"
              label="عکس محصول"
              layout="horizontal"
              isRequired
            />
          )}
        />
        {formFields.map((input) =>
          input.type === 'textarea' ? (
            <Textarea
              key={input.name}
              label={input.label}
              {...register(input.name)}
              layout="horizontal"
              error={errors[input.name]?.message}
              isRequired
            />
          ) : input.type === 'select' ? (
            <Select
              disabled={isPending}
              label={input.label}
              layout="horizontal"
              key={input.name}
              error={errors[input.name]?.message}
              {...register(input.name)}
            >
              {categories.map((category) => (
                <Option
                  key={category.value}
                  value={category.value}
                >
                  {category.label}
                </Option>
              ))}
            </Select>
          ) : (
            <Input
              key={input.name}
              type={input.type}
              label={input.label}
              {...register(input.name, { valueAsNumber: input.type === 'number' })}
              layout="horizontal"
              error={errors[input.name]?.message}
              isRequired
            />
          )
        )}
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <TagsInput
              onChangeTags={field.onChange}
              tags={field.value}
              onBlur={field.onBlur}
              label="برچسب ها"
              error={errors.tags?.message}
              layout="horizontal"
            />
          )}
        />
        <div className="flex justify-end">
          <Button
            disabled={!isValid || isCreating || isUpdating}
            isLoading={isCreating || isUpdating}
            variant="primary"
          >
            {initialData ? 'بروزرسانی محصول' : 'ایجاد محصول'}
          </Button>
        </div>
      </form>
    </fieldset>
  );
}
