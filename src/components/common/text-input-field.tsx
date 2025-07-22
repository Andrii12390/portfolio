import { Control, FieldValues, Path } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  type?: string;
}

export const TextInputField = <T extends FieldValues>({ name, label, control, type }: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="mb-2">{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              data-testid={`${name}-field`}
              autoComplete="off"
              type={type}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
