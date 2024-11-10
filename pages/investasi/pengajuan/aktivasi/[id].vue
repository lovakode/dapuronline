<template>
    <div class="content">
        <div class="flex justify-between align-middle mb-4">
            <base-reader label="Tanggal Pengajuan">
                {{ data.created_at }}
            </base-reader>
            <div class="flex">
                <el-button type="danger" @click.prevent="openAction('tolak')" class="!rounded-3xl !px-4 !py-3 !h-10">
                    Tolak Pengajuan
                </el-button>
                <el-button type="success" @click.prevent="openAction('setuju')" class="!rounded-3xl !px-4 !py-3 !h-10">
                    Setujui Aktivasi
                </el-button>
            </div>
        </div>
        <el-card class="!rounded-2xl !mb-6" shadow="never">
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
        </el-card>

        <el-dialog v-model="openModal" title="" class="!rounded-3xl" width="500">
            <div class="p-3 text-center" v-if="status == 'setuju'">
                <div class="mb-3 justify-center flex">
                    <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="1" width="98" height="98" rx="49" fill="#C7FFE4" />
                        <rect x="1.5" y="1" width="98" height="98" rx="49" stroke="#089451" stroke-width="2" />
                        <path
                            d="M50.5 27.25C46.0005 27.25 41.602 28.5843 37.8608 31.0841C34.1196 33.5839 31.2036 37.1369 29.4818 41.294C27.7599 45.451 27.3093 50.0252 28.1871 54.4383C29.065 58.8514 31.2317 62.905 34.4133 66.0867C37.595 69.2683 41.6486 71.4351 46.0617 72.3129C50.4748 73.1907 55.049 72.7402 59.2061 71.0183C63.3631 69.2964 66.9161 66.3804 69.4159 62.6392C71.9157 58.898 73.25 54.4995 73.25 50C73.2436 43.9683 70.8447 38.1854 66.5797 33.9204C62.3146 29.6553 56.5317 27.2564 50.5 27.25ZM50.5 69.25C46.6927 69.25 42.9709 68.121 39.8053 66.0058C36.6396 63.8906 34.1723 60.8841 32.7153 57.3667C31.2583 53.8492 30.8771 49.9786 31.6199 46.2445C32.3627 42.5104 34.196 39.0804 36.8882 36.3882C39.5804 33.696 43.0104 31.8626 46.7445 31.1199C50.4787 30.3771 54.3492 30.7583 57.8667 32.2153C61.3841 33.6723 64.3906 36.1396 66.5058 39.3053C68.621 42.4709 69.75 46.1927 69.75 50C69.7442 55.1036 67.7142 59.9966 64.1054 63.6054C60.4966 67.2142 55.6037 69.2442 50.5 69.25ZM48.75 51.75V39.5C48.75 39.0359 48.9344 38.5908 49.2626 38.2626C49.5908 37.9344 50.0359 37.75 50.5 37.75C50.9641 37.75 51.4093 37.9344 51.7374 38.2626C52.0656 38.5908 52.25 39.0359 52.25 39.5V51.75C52.25 52.2141 52.0656 52.6593 51.7374 52.9874C51.4093 53.3156 50.9641 53.5 50.5 53.5C50.0359 53.5 49.5908 53.3156 49.2626 52.9874C48.9344 52.6593 48.75 52.2141 48.75 51.75ZM53.125 59.625C53.125 60.1442 52.9711 60.6517 52.6826 61.0834C52.3942 61.515 51.9842 61.8515 51.5046 62.0502C51.0249 62.2489 50.4971 62.3008 49.9879 62.1996C49.4787 62.0983 49.011 61.8483 48.6439 61.4812C48.2767 61.114 48.0267 60.6463 47.9254 60.1371C47.8242 59.6279 47.8761 59.1001 48.0748 58.6205C48.2735 58.1408 48.61 57.7308 49.0416 57.4424C49.4733 57.154 49.9808 57 50.5 57C51.1962 57 51.8639 57.2766 52.3562 57.7688C52.8484 58.2611 53.125 58.9288 53.125 59.625Z"
                            fill="#089451" />
                    </svg>
                </div>
                <h3 class="font-semibold text-xl">Setujui Permintaan Aktivasi Fitur</h3>
                <p class="text-base font-normal leading-6 text-zinc-400">Apakah Anda yakin ingin mengkonfirmasi
                    pengajuan aktivasi fitur pinjaman modal? Jika sudah yakin, klik “Ya, saya yakin” untuk menyetujui
                    permintaan.</p>

                <div class="flex justify-center">
                    <el-button @click.prevent="cancelAction" class="!rounded-3xl !px-5 !py-3 !h-10">
                        Review Kembali
                    </el-button>
                    <el-button type="success" @click.prevent="openAction('setuju')"
                        class="!rounded-3xl !px-5 !py-3 !h-10">
                        Ya, saya yakin
                    </el-button>
                </div>
            </div>
            <div class="p-3 text-center" v-else>
                <div class="mb-3 justify-center flex">
                    <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="1" width="98" height="98" rx="49" fill="#FFC7C7" />
                        <rect x="1.5" y="1" width="98" height="98" rx="49" stroke="#F40000" stroke-width="2" />
                        <path
                            d="M50.5 27.25C46.0005 27.25 41.602 28.5843 37.8608 31.0841C34.1196 33.5839 31.2036 37.1369 29.4818 41.294C27.7599 45.451 27.3093 50.0252 28.1871 54.4383C29.065 58.8514 31.2317 62.905 34.4133 66.0867C37.595 69.2683 41.6486 71.4351 46.0617 72.3129C50.4748 73.1907 55.049 72.7402 59.2061 71.0183C63.3631 69.2964 66.9161 66.3804 69.4159 62.6392C71.9157 58.898 73.25 54.4995 73.25 50C73.2436 43.9683 70.8447 38.1854 66.5797 33.9204C62.3146 29.6553 56.5317 27.2564 50.5 27.25ZM50.5 69.25C46.6927 69.25 42.9709 68.121 39.8053 66.0058C36.6396 63.8906 34.1723 60.8841 32.7153 57.3667C31.2583 53.8492 30.8771 49.9786 31.6199 46.2445C32.3627 42.5104 34.196 39.0804 36.8882 36.3882C39.5804 33.696 43.0104 31.8626 46.7445 31.1199C50.4787 30.3771 54.3492 30.7583 57.8667 32.2153C61.3841 33.6723 64.3906 36.1396 66.5058 39.3053C68.621 42.4709 69.75 46.1927 69.75 50C69.7442 55.1036 67.7142 59.9966 64.1054 63.6054C60.4966 67.2142 55.6037 69.2442 50.5 69.25ZM48.75 51.75V39.5C48.75 39.0359 48.9344 38.5908 49.2626 38.2626C49.5908 37.9344 50.0359 37.75 50.5 37.75C50.9641 37.75 51.4093 37.9344 51.7374 38.2626C52.0656 38.5908 52.25 39.0359 52.25 39.5V51.75C52.25 52.2141 52.0656 52.6593 51.7374 52.9874C51.4093 53.3156 50.9641 53.5 50.5 53.5C50.0359 53.5 49.5908 53.3156 49.2626 52.9874C48.9344 52.6593 48.75 52.2141 48.75 51.75ZM53.125 59.625C53.125 60.1442 52.9711 60.6517 52.6826 61.0834C52.3942 61.515 51.9842 61.8515 51.5046 62.0502C51.0249 62.2489 50.4971 62.3008 49.9879 62.1996C49.4787 62.0983 49.011 61.8483 48.6439 61.4812C48.2767 61.114 48.0267 60.6463 47.9254 60.1371C47.8242 59.6279 47.8761 59.1001 48.0748 58.6205C48.2735 58.1408 48.61 57.7308 49.0416 57.4424C49.4733 57.154 49.9808 57 50.5 57C51.1962 57 51.8639 57.2766 52.3562 57.7688C52.8484 58.2611 53.125 58.9288 53.125 59.625Z"
                            fill="#F40000" />
                    </svg>

                </div>
                <h3 class="font-semibold text-xl">Tolak Pengajuan Aktivasi Fitur</h3>
                <p class="text-base font-normal leading-6 text-zinc-400">Apakah Anda yakin ingin menolak pengajuan
                    aktivasi fitur pinjaman modal? Jika sudah yakin, klik “Ya, tolak permintaan” untuk menolak
                    permintaan.</p>

                <div class="flex justify-center">
                    <el-button @click.prevent="cancelAction" class="!rounded-3xl !px-5 !py-3 !h-10">
                        Review Kembali
                    </el-button>
                    <el-button type="danger" @click.prevent="openAction('setuju')"
                        class="!rounded-3xl !px-5 !py-3 !h-10">
                        Ya, tolak pengajuan
                    </el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const route = useRoute();
useHead({ 
    title: 'Konfirmasi Pengajuan Aktivasi Fitur' 
});


const data = ref({
    created_at : '2024-10-30 09:00',
    umkm : 'LaundryCare',
    join_at : '27 Januari 2024',
    nik : '32051209312312312312',
    nama_pemilik : 'Irshal Ferdieansyah',
    email : 'LaundryCare@gmail.com',
    telp : '0892129037129312',
    alamat : 'Jl. Terusan Gatot Subroto, No.12/123, RT/RW 002/003, Kiaracondong, Kota Bandung, Jawa Barat, 12312',
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