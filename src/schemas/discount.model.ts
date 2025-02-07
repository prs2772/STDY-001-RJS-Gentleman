import {z} from 'zod';

const schema = z.object({
    discount: z.number().nonnegative().default(0),
});

type UseMemoValues = z.infer<typeof schema>;

export { schema, type UseMemoValues };
