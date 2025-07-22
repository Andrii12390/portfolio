import { Control, FieldValues, Path } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  className?: string;
}

export const TextAreaField = <T extends FieldValues>({
  name,
  label,
  control,
  className,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="mb-1">{label}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              data-testid={`${name}-field`}
              autoComplete="off"
              className={className}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
