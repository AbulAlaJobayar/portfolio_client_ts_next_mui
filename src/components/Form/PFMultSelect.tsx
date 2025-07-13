"use client";
import { Autocomplete, Chip, TextField, SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TMultiSelectProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  required?: boolean;
  sx?: SxProps;
  options: string[];
};

const PFMultiSelect = ({
  name,
  label,
  size = "small",
  fullWidth,
  required,
  sx,
  options,
}: TMultiSelectProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          multiple
          freeSolo
          options={options}
          value={value || []}
          onChange={(_, newValue) => onChange(newValue)}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => {
              const { key, ...otherTagProps } = getTagProps({ index });
              return (
                <Chip
                  key={key} // Use the key from getTagProps
                  {...otherTagProps} // Spread all other props except key
                  label={option}
                  size={size}
                />
              );
            })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              size={size}
              fullWidth={fullWidth}
              required={required}
              error={!!error?.message}
              helperText={error?.message}
              sx={sx}
            />
          )}
        />
      )}
    />
  );
};

export default PFMultiSelect;