import { z } from 'zod';

const productSchema = z.object({
  title: z
    .string({ message: 'مقدار عنوان ضروری است' })
    .min(3, 'عنوان محصول باید حداقل 3 کارکتر باشد')
    .max(50, 'عنوان محصول باید کمتر از 50 کارکتر باشد'),
  description: z.string().min(1, 'توضیحات ضروری است'),
  slug: z.string({ message: 'مقدار اسلاگ ضروری است' }).min(1, 'اسلاگ ضروری است'),
  brand: z.string({ message: 'مقدار برند ضروری است' }).min(1, 'برند ضروری است'),
  countInStock: z
    .number({ message: 'مقدار موجودی ضروری است' })
    .nonnegative({ message: 'مقدار موجودی نمیتواند منفی باشد' }),
  imageLink: z.string({ message: 'عکس محصول الزامی است' }).url('لینک عکس محصول معتبر نیست'),
  tags: z.array(z.string()).max(20, 'تعداد تگ ها نمیتواند بیشتر از 20 تا باشد').default([]),
  category: z
    .string({ message: 'لطفا دسته بندی مد نظر را انتخاب کنید' })
    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, {
      message: 'دسته بندی محصول را به درستی انتخاب کنید',
    }),
  price: z
    .number({ message: 'مقدار قیمت ضروری است' })
    .nonnegative({ message: 'قیمت نمیتواند منفی باشد' }),
  discount: z
    .number({ message: 'مقدار تخفیف ضروری است' })
    .nonnegative({ message: 'مقدار تخفیف نمیتواند منفی باشد' }),
  offPrice: z
    .number({ message: 'مقدار قیمت تخفیف خورده ضروری است' })
    .nonnegative({ message: 'قیمت تخفیف خورده نمیتواند منفی باشد' }),
});

type ProductSchemaType = z.infer<typeof productSchema>;

export { productSchema, type ProductSchemaType };
