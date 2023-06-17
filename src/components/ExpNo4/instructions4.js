import React from 'react';
import { Modal, Typography } from "antd"

export const Instructions4 = ({ ShowInstructions, setShowInstructions }) => {
    return (
        <>
            {
                ShowInstructions === true ? (
                    <Modal
                        className='select-none'
                        onCancel={() => setShowInstructions(false)}
                        cancelButtonProps={{ style: { display: 'none' } }}
                        okButtonProps={{ style: { display: 'none' } }}
                        title={<Typography.Title level={4} style={{ margin: 0 }} >تعليمات التجربة</Typography.Title>}
                        style={{ direction: 'rtl' }}
                        open={ShowInstructions}
                        width={'50vw'}
                    >
                        <ul style={{ listStyleType: 'disc' }} >
                            <li>
                                <Typography.Title level={5} style={{ margin: 0 }} >
                                    ادوات التجربة
                                </Typography.Title>
                            </li>
                            <Typography.Paragraph style={{ textAlign: 'justify' }} >
                                مصدر فولطية تردده ثابت، أميتر، فولطميتر، ملف مهمل المقاومة(محث)، مفتاح كهربائي.
                            </Typography.Paragraph>
                            <li className='font-bold' >
                                <Typography.Title level={5} style={{ margin: 0 }} >
                                    خطوات التجربة
                                </Typography.Title>
                            </li>
                            <Typography.Paragraph style={{ textAlign: 'justify' }}>
                                <ul>
                                    <li>نربط الملف، الاميتر، مصدر الفولطية والمفتاح على التوالي، ونربط الفولطميتر على التوازي بين طرفي الملف.</li>
                                    <li>نشغل الدائرة من خلال الضغط على زر التشغيل الموجود في الزاوية العليا من الجهة اليسرى للواجهة وبعدها نغلق مفتاح الدائرة ونلاحظ قراءة الاميتر.</li>
                                    <li>ندخل قلب من الحديد المطاوع في جوف الملف و ذلك من خلال لوحة التحكم بالملف و التي يمكن إظهارها بالضغط على الملف و نلاحظ التغير في قراءة الاميتر.</li>
                                </ul>
                            </Typography.Paragraph>
                        </ul>
                    </Modal>
                ) : null
            }
        </>
    )
}