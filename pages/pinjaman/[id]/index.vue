<template>
    <div class="content">
        <div class="flex justify-between align-middle mb-4">
            <base-reader label="Tanggal Pengajuan">
                {{ data.created_at }}
            </base-reader>
            <base-reader label="Tanggal Dikonfirmasi">
                {{ data.confirmed_at }}
            </base-reader>
            <div class="flex">
                <state v-if="data.status == 'lunas'" type="warning" class="!px-10 !text-base">
                    <div class="my-auto">Lunas</div>
                </state>
                <state v-else-if="data.status == 'aktif'" type="success" class="!px-10 !text-base">
                    <div class="my-auto">Aktif</div>
                </state>
            </div>
        </div>
        <el-card class="!rounded-2xl !mb-6" shadow="never">
            <el-radio-group v-model="tab" class="mb-4">
                <el-radio-button value="pinjaman" class="tab">
                    <div class="flex align-middle">
                        <svg class="me-2" width="20" height="21" viewBox="0 0 20 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.1406 9.14375C19.0246 8.98292 18.872 8.852 18.6954 8.7618C18.5188 8.6716 18.3233 8.62471 18.125 8.625H16.875V7.375C16.875 7.04348 16.7433 6.72554 16.5089 6.49112C16.2745 6.2567 15.9565 6.125 15.625 6.125H10.2086L8.04219 4.5C7.82545 4.33842 7.56252 4.25078 7.29219 4.25H3.125C2.79348 4.25 2.47554 4.3817 2.24112 4.61612C2.0067 4.85054 1.875 5.16848 1.875 5.5V16.75C1.875 16.9158 1.94085 17.0747 2.05806 17.1919C2.17527 17.3092 2.33424 17.375 2.5 17.375H16.4922C16.6234 17.375 16.7512 17.3337 16.8577 17.257C16.9641 17.1803 17.0437 17.0721 17.0852 16.9477L19.3109 10.2703C19.3735 10.0824 19.3907 9.88238 19.3611 9.68657C19.3315 9.49076 19.256 9.30474 19.1406 9.14375ZM7.29219 5.5L9.625 7.25C9.73318 7.33114 9.86477 7.375 10 7.375H15.625V8.625H5.45078C5.18842 8.62498 4.9327 8.70752 4.71985 8.86091C4.507 9.01431 4.34782 9.23079 4.26484 9.47969L3.125 12.8984V5.5H7.29219ZM16.0422 16.125H3.36719L5.45078 9.875H18.125L16.0422 16.125Z"
                                    fill="currentColor" />
                            </svg>

                        <div class="my-auto">Informasi Pengajuan</div>
                    </div>
                </el-radio-button>
                <el-radio-button value="tagihan" class="tab">
                    <div class="flex align-middle">
                        <svg class="me-2" width="14" height="17" viewBox="0 0 14 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.6922 4.93281L9.31719 0.557813C9.2591 0.499791 9.19015 0.453782 9.11428 0.422415C9.03841 0.391047 8.9571 0.374936 8.875 0.375H1.375C1.04348 0.375 0.725537 0.506696 0.491116 0.741117C0.256696 0.975537 0.125 1.29348 0.125 1.625V15.375C0.125 15.7065 0.256696 16.0245 0.491116 16.2589C0.725537 16.4933 1.04348 16.625 1.375 16.625H12.625C12.9565 16.625 13.2745 16.4933 13.5089 16.2589C13.7433 16.0245 13.875 15.7065 13.875 15.375V5.375C13.8751 5.2929 13.859 5.21159 13.8276 5.13572C13.7962 5.05985 13.7502 4.9909 13.6922 4.93281ZM9.5 2.50859L11.7414 4.75H9.5V2.50859ZM12.625 15.375H1.375V1.625H8.25V5.375C8.25 5.54076 8.31585 5.69973 8.43306 5.81694C8.55027 5.93415 8.70924 6 8.875 6H12.625V15.375ZM10.125 9.125C10.125 9.29076 10.0592 9.44973 9.94194 9.56694C9.82473 9.68415 9.66576 9.75 9.5 9.75H4.5C4.33424 9.75 4.17527 9.68415 4.05806 9.56694C3.94085 9.44973 3.875 9.29076 3.875 9.125C3.875 8.95924 3.94085 8.80027 4.05806 8.68306C4.17527 8.56585 4.33424 8.5 4.5 8.5H9.5C9.66576 8.5 9.82473 8.56585 9.94194 8.68306C10.0592 8.80027 10.125 8.95924 10.125 9.125ZM10.125 11.625C10.125 11.7908 10.0592 11.9497 9.94194 12.0669C9.82473 12.1842 9.66576 12.25 9.5 12.25H4.5C4.33424 12.25 4.17527 12.1842 4.05806 12.0669C3.94085 11.9497 3.875 11.7908 3.875 11.625C3.875 11.4592 3.94085 11.3003 4.05806 11.1831C4.17527 11.0658 4.33424 11 4.5 11H9.5C9.66576 11 9.82473 11.0658 9.94194 11.1831C10.0592 11.3003 10.125 11.4592 10.125 11.625Z"
                                fill="currentColor" />
                        </svg>

                        <div class="my-auto">
                            Informasi Tagihan
                        </div>
                    </div>
                </el-radio-button>
            </el-radio-group>
            <template v-if="tab == 'pinjaman'">
                <el-row :gutter="20">
                    <el-col :md="18">
                        <h3 class="text-xl mb-4">INFORMASI UMKM</h3>
                        <el-row class="mb-4">
                            <el-col :md="12">
                                <base-reader label="Nama UMKM">
                                    {{ data.umkm }}
                                </base-reader>
                            </el-col>
                            <el-col :md="12">
                                <base-reader label="Bergabung pada">
                                    {{ data.join_at }}
                                </base-reader>
                            </el-col>
                        </el-row>
                        <el-row class="mb-4">
                            <el-col :md="12">
                                <base-reader label="NIK">
                                    {{ data.nik }}
                                </base-reader>
                            </el-col>
                            <el-col :md="12">
                                <base-reader label="Nama Pemilik">
                                    {{ data.nama_pemilik }}
                                </base-reader>
                            </el-col>
                        </el-row>
                        <el-row class="mb-4">
                            <el-col :md="12">
                                <base-reader label="Email">
                                    {{ data.email }}
                                </base-reader>
                            </el-col>
                            <el-col :md="12">
                                <base-reader label="Telp">
                                    {{ data.telp }}
                                </base-reader>
                            </el-col>
                        </el-row>
                        <base-reader label="Alamat">
                            {{ data.alamat }}
                        </base-reader>
                        <el-row class="mb-4">
                            <el-col :md="12">
                                <base-reader label="Surat Keterangan Usaha">
                                    <a href="">SuratKeteranganUsaha_LaundryCare.pdf</a>
                                </base-reader>
                            </el-col>
                            <el-col :md="12">
                                <base-reader label="Kartu Tanda Penduduk (KTP)">
                                    <a href="">KTP_LaundryCare.pdf</a>
                                </base-reader>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <h3 class="text-xl mb-4">Kontak Darurat</h3>
                <el-row class="mb-4" v-for="( d, i) in data.darurat" :key="i">
                    <el-col :md="8">
                        <base-reader label="Nama">
                            {{ d.nama }}
                        </base-reader>
                    </el-col>
                    <el-col :md="8">
                        <base-reader label="Hubungan">
                            {{ d.hubungan }}
                        </base-reader>
                    </el-col>
                    <el-col :md="8">
                        <base-reader label="No Telepon">
                            {{ d.telp }}
                        </base-reader>
                    </el-col>
                </el-row>
            </template>
            <template v-else>
                <h3 class="text-xl mb-4">Informasi Tagihan</h3>

                <NuxtLink v-for="(d,i) in tagihanList" :key="i" :to="{name : 'pinjaman-id-tagihan', params : { tagihan : d.id }}">
                    <el-card shadow="hover" class="!rounded-md !mb-2">
                        <div class="flex justify-between align-middle">
                            <div class="flex align-middle">
                                <div :class="tagihanStatus(d.status)" class="my-auto">
                                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="48" height="48" rx="24" fill="currentColor"/>
                                        <path d="M38.5324 16.0011C38.3885 15.9113 38.224 15.8595 38.0545 15.8508C37.8851 15.8421 37.7161 15.8766 37.5637 15.9511C32.1974 18.5761 28.3649 17.3461 24.3137 16.0486C20.0637 14.6874 15.6574 13.2811 9.56994 16.2536C9.39985 16.3352 9.25631 16.4633 9.1559 16.6229C9.05548 16.7826 9.00228 16.9675 9.00244 17.1561V32.1474C9.00242 32.317 9.04556 32.4839 9.12782 32.6323C9.21008 32.7807 9.32874 32.9058 9.47264 32.9956C9.61654 33.0855 9.78095 33.1373 9.95039 33.1462C10.1198 33.155 10.2887 33.1206 10.4412 33.0461C15.8074 30.4211 19.6399 31.6511 23.6974 32.9486C26.1024 33.7174 28.5524 34.5011 31.3224 34.5011C33.4587 34.5011 35.7887 34.0361 38.4362 32.7436C38.6043 32.6615 38.7461 32.5339 38.8453 32.3752C38.9445 32.2166 38.9972 32.0333 38.9974 31.8461V16.8549C38.999 16.6848 38.957 16.5171 38.8757 16.3677C38.7943 16.2183 38.6762 16.0921 38.5324 16.0011ZM37.0024 31.2099C31.9274 33.4811 28.2212 32.2961 24.3074 31.0449C21.9024 30.2761 19.4524 29.4924 16.6824 29.4924C14.7363 29.5018 12.81 29.8837 11.0074 30.6174V17.7924C16.0824 15.5211 19.7887 16.7061 23.7024 17.9574C27.6162 19.2086 31.6449 20.5011 37.0024 18.3874V31.2099ZM24.0024 20.5011C23.2113 20.5011 22.438 20.7357 21.7802 21.1753C21.1224 21.6148 20.6097 22.2395 20.3069 22.9704C20.0042 23.7013 19.925 24.5056 20.0793 25.2815C20.2336 26.0574 20.6146 26.7701 21.174 27.3296C21.7334 27.889 22.4462 28.2699 23.2221 28.4243C23.998 28.5786 24.8023 28.4994 25.5332 28.1966C26.2641 27.8939 26.8888 27.3812 27.3283 26.7234C27.7678 26.0656 28.0024 25.2923 28.0024 24.5011C28.0024 23.4403 27.581 22.4228 26.8309 21.6727C26.0807 20.9226 25.0633 20.5011 24.0024 20.5011ZM24.0024 26.5011C23.6069 26.5011 23.2202 26.3838 22.8913 26.1641C22.5624 25.9443 22.3061 25.632 22.1547 25.2665C22.0033 24.901 21.9637 24.4989 22.0409 24.111C22.118 23.723 22.3085 23.3666 22.5882 23.0869C22.8679 22.8072 23.2243 22.6167 23.6123 22.5396C24.0002 22.4624 24.4024 22.502 24.7678 22.6534C25.1333 22.8047 25.4456 23.0611 25.6654 23.39C25.8851 23.7189 26.0024 24.1056 26.0024 24.5011C26.0024 25.0316 25.7917 25.5403 25.4167 25.9153C25.0416 26.2904 24.5329 26.5011 24.0024 26.5011ZM15.0024 20.5011V26.5011C15.0024 26.7663 14.8971 27.0207 14.7095 27.2082C14.522 27.3958 14.2677 27.5011 14.0024 27.5011C13.7372 27.5011 13.4829 27.3958 13.2953 27.2082C13.1078 27.0207 13.0024 26.7663 13.0024 26.5011V20.5011C13.0024 20.2359 13.1078 19.9816 13.2953 19.794C13.4829 19.6065 13.7372 19.5011 14.0024 19.5011C14.2677 19.5011 14.522 19.6065 14.7095 19.794C14.8971 19.9816 15.0024 20.2359 15.0024 20.5011ZM33.0024 28.5011V22.5011C33.0024 22.2359 33.1078 21.9816 33.2953 21.794C33.4829 21.6065 33.7372 21.5011 34.0024 21.5011C34.2677 21.5011 34.522 21.6065 34.7095 21.794C34.8971 21.9816 35.0024 22.2359 35.0024 22.5011V28.5011C35.0024 28.7663 34.8971 29.0207 34.7095 29.2082C34.522 29.3958 34.2677 29.5011 34.0024 29.5011C33.7372 29.5011 33.4829 29.3958 33.2953 29.2082C33.1078 29.0207 33.0024 28.7663 33.0024 28.5011Z" fill="white"/>
                                    </svg>
                                </div>
                                <div class="ms-4">
                                    <div class="text-xl font-semibold">
                                        {{ d.nominal }}
                                    </div>
                                    <div class="text-zinc-400 text-sm font-normal mb-1">
                                        <template v-if="d.status == 'paid'">
                                            Dibayar pada
                                        </template>
                                        <template v-else>
                                            Tanggal jatuh tempo
                                        </template>
                                        {{ d.tgl }}
                                    </div>
                                    <state v-if="d.status == 'paid'" type="success">
                                        Pembayaran Diterima 
                                    </state>
                                    <state v-else-if="d.status == 'overdue'" type="danger">
                                        Lewat Jatuh Tempo
                                    </state>
                                    <state v-else>
                                        Belum Dibayar
                                    </state>
                                </div>
                            </div>
                            <div class="my-auto">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.0307 13.031L9.53068 20.531C9.46099 20.6007 9.37827 20.656 9.28722 20.6937C9.19618 20.7314 9.0986 20.7508 9.00005 20.7508C8.9015 20.7508 8.80392 20.7314 8.71288 20.6937C8.62183 20.656 8.53911 20.6007 8.46943 20.531C8.39974 20.4614 8.34447 20.3786 8.30676 20.2876C8.26904 20.1965 8.24963 20.099 8.24963 20.0004C8.24963 19.9019 8.26904 19.8043 8.30676 19.7132C8.34447 19.6222 8.39974 19.5395 8.46943 19.4698L15.4397 12.5004L8.46943 5.53104C8.32869 5.39031 8.24963 5.19944 8.24963 5.00042C8.24963 4.80139 8.32869 4.61052 8.46943 4.46979C8.61016 4.32906 8.80103 4.25 9.00005 4.25C9.19907 4.25 9.38995 4.32906 9.53068 4.46979L17.0307 11.9698C17.1004 12.0394 17.1557 12.1222 17.1935 12.2132C17.2312 12.3043 17.2506 12.4019 17.2506 12.5004C17.2506 12.599 17.2312 12.6966 17.1935 12.7876C17.1557 12.8787 17.1004 12.9614 17.0307 13.031Z" fill="black"/>
                                </svg>
                            </div>

                        </div>
                    </el-card>
                </NuxtLink>
            </template>
        </el-card>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const route = useRoute();
useHead({ 
    title: 'Detail Pinjaman' 
});
definePageMeta({ 
    title: 'Detail Pinjaman' 
});

const tab = ref('pinjaman');

const data = ref({
    created_at : '2024-10-30 09:00',
    confirmed_at : '2024-10-30 09:00',
    umkm : 'LaundryCare',
    join_at : '27 Januari 2024',
    nik : '32051209312312312312',
    nama_pemilik : 'Irshal Ferdieansyah',
    email : 'LaundryCare@gmail.com',
    telp : '0892129037129312',
    alamat : 'Jl. Terusan Gatot Subroto, No.12/123, RT/RW 002/003, Kiaracondong, Kota Bandung, Jawa Barat, 12312',
    status : 'aktif',
    darurat : [
        {
            nama : "Ganjar",
            hubungan : "Keluarga",
            telp : "08123123123123"
        },
        {
            nama : "Gilang",
            hubungan : "Keluarga",
            telp : "08123123123123"
        },
    ]
});

const status = ref('');
const openModal = ref(false);

const tagihanList = ref([
    {
        id : 1,
        nominal : 'Rp 10.000.000',
        tgl : '2024-10-30 09:00',
        status : 'paid',
    },
    {
        id : 2,
        nominal : 'Rp 10.000.000',
        tgl : '2024-10-30 09:00',
        status : 'overdue',
    },
    {
        id : 1,
        nominal : 'Rp 10.000.000',
        tgl : '2024-10-30 09:00',
        status : 'unpaid',
    }
]);

const tagihanStatus = (val) => {
    return {
        'text-red-500' : val == 'overdue',
        'text-green-700' : val == 'paid',
        'text-zinc-300' : val == 'unpaid',
    }
};
const openAction = (v) => {
    status.value = v;
    openModal.value = true;
}
// const 
const cancelAction = () => {
    status.value = '';
    openModal.value = false;
}

</script>