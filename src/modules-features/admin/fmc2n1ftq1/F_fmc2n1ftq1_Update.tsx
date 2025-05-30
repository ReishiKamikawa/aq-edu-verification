"use client"
import baseAxios from '@/api/baseAxios';
import MyActionIconUpdate from '@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate';
import MyNumberInput from '@/components/Inputs/NumberInput/MyNumberInput';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { Checkbox, Group, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';

interface F_fmc2n1ftq1_Update {
    id: number;
    code: string;
    name: string;
    concurrencyStamp: string;
    isEnabled: boolean;
    nameEg: string;
    point: number;
    isStorage: boolean;
    note: string;
    order?: number | null;
    isFailed?: boolean | null;
}

export default function F_fmc2n1ftq1_Update({data}:{data:F_fmc2n1ftq1_Update}) {
    const form = useForm<F_fmc2n1ftq1_Update>({
        initialValues: data,
        validate: {
            // id:(value)=>value ? null : 'Không được để trống', 
            name: (value) => value ? null : 'Không được để trống',
            order: (value) => value ? null : 'Không được để trống',
            point: (value) => value ? null : 'Không được để trống',
        }
    });
    useEffect(() => {
        if (data) {
            form.setValues(data);
        }
    }, [data]);

    return (
        <Group>
            <MyActionIconUpdate
                form={form}
                onSubmit={async (values) => {
                    // console.log("Cập nhập thành công: ", form.values);
                    return await baseAxios.post("/COERubricsMethod/Update", values);
                    // baseAxios.post("rubric", form.values)
                }}
            >
                            <MyTextInput label="Thứ tự" {...form.getInputProps("order")} />
                            <MyTextInput label="Mức đánh giá" {...form.getInputProps("name")} />
                            <MyTextInput label="Mức đánh giá (Eg)" {...form.getInputProps("nameEg")} />
                            <MyNumberInput min={0} step={0.1} label="Điểm >= " {...form.getInputProps("point")} />
                            <Checkbox label="Không đạt" {...form.getInputProps("isFailed", { type: 'checkbox' })} />
                            <Textarea label="Ghi chú" {...form.getInputProps("note")} />
            </MyActionIconUpdate>
        </Group>
    );
}
