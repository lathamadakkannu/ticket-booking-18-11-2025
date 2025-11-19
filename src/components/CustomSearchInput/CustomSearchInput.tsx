"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/system";

interface CustomTextFieldProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    multiline?: boolean;
    rows?: number;
    type?: string;
    InputLabelProps?: object;
    className?: string;
    sx?: SxProps<Theme>;
}

export default function CustomTextField({
    placeholder,
    value,
    onChange,
    multiline = false,
    rows,
    type,
    InputLabelProps,
    className,
    sx = {},
}: CustomTextFieldProps) {
    return (
        <TextField
            variant="outlined"
            fullWidth
            size="small"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            multiline={multiline}
            rows={rows}
            type={type}
            InputLabelProps={InputLabelProps}
            className={className}
            sx={{
                "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    border: "2px solid #e0e0e0",
                    padding:  "2px ",
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
                ...sx,
            }}
        />
    );
}
