'use client'
import baseAxios from "@/api/baseAxios";
import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import MyDateInput from "@/components/Inputs/DateInput/MyDateInput";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import { OBJECT_DOCUMENT_TYPES } from "@/constants/object/documentTypes";
import { utils_file_fileToAQDocumentType } from "@/utils/file";
import { FileInput } from "@mantine/core";
import { useForm } from "@mantine/form";

interface IDocument {
    path?: string;
    orderBy?: number;
    documentType?: number;
    promulgateDate?: Date;
    decisionCode?: string;
    departmentName?: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    conclusion?: string;
    note?: string;
    documentAttributeId?: number;
    documentAttributeName?: string;
    isCycleCheck?: boolean;
    meetingDate?: Date;
    fileDetail?: {
        fileBase64String?: string,
        fileExtension?: string,
        fileName?: string
    };
    id?: number;
    code?: string;
    name?: string;
    concurrencyStamp?: string;
    isEnabled?: boolean;
    ngayChinhSua?: Date;
    nguoiChinhSua?: string;
}
interface I extends IDocument {
    file?: File
}

export default function F_core16209_Create() {
    const form = useForm<I>({
        mode: "uncontrolled"
    })
    return (
        <MyButtonCreate objectName="văn bản" form={form} onSubmit={async (values) => {
            return await baseAxios.post("/Document/create",
                {
                    ...values,
                    DocumentType: OBJECT_DOCUMENT_TYPES.Refinement, //1.4 Thông tin xây dựng, cải tiến, bảo trì hệ thống
                    fileDetail: await utils_file_fileToAQDocumentType(values.file!)
                })
        }}>
            <MyTextInput label="Đơn vị yêu cầu" {...form.getInputProps("departmentName")} />
            <MyTextInput label="Nội dung cải tiến" {...form.getInputProps("description")} />
            <MyDateInput label="Ngày bắt đầu" {...form.getInputProps("startDate")} />
            <MyDateInput label="Ngày kết thúc" {...form.getInputProps("endDate")} />
            <FileInput label="Tài liệu"{...form.getInputProps("file")} />
        </MyButtonCreate >
    )
}
