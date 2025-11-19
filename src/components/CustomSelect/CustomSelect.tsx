"use client";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SxProps, Theme } from "@mui/system";

interface CustomSelectProps {
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
  children: React.ReactNode;
  displayEmpty?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
}

export default function CustomSelect({
  value,
  onChange,
  children,
  displayEmpty = false,
  className,
  sx = {},
}: CustomSelectProps) {
  return (
    <Select
      fullWidth
      size="small"
      value={value}
      onChange={onChange}
      displayEmpty={displayEmpty}
      className={className}
      sx={{
        "&.MuiOutlinedInput-root, & .MuiOutlinedInput-root": {
          borderRadius: "10px",
          border: "2px solid #e0e0e0",
          padding: "2px",
          fontSize: "16px",
          transition: "all 0.3s",
          "&:hover": {
            borderColor: "#c6c6c6",
          },
          "&.Mui-focused": {
            borderColor: "#667eea",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiSelect-select": {
          fontSize: "14px", 
        },

        ...sx,
      }}
      variant="outlined"
    >
      {children}
    </Select>
  );
}
