'use client';

import { MyButton } from '@/components/Buttons/Button/MyButton';
import MyButtonCreate from '@/components/Buttons/ButtonCRUD/MyButtonCreate';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { Paper, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

export interface I_4iahruyrpf{
    maLoai: string;
    tenLoai: string;
    ghiChu: string;
}

export default function I_4iahruyrpf() {
const form = useForm<I_4iahruyrpf>({
    initialValues: {
        maLoai: "",
        tenLoai: "",
        ghiChu: "",
    }
})


      

  return (
    <MyButtonCreate form={form} onSubmit={() => {}} objectName='Chi tiết loại minh chứng' modalSize={''}>
  <Paper shadow="xs" p="lg">
     <MyTextInput label='Mã loại minh chứng' {...form.getInputProps("maLoai")} />
     <MyTextInput label='Tên loại minh chứng' {...form.getInputProps("tenLoai")} />
     <MyTextInput label='Ghi chú' {...form.getInputProps("ghiChu")} /> 

    </Paper>
    </MyButtonCreate>
  );
}
