<template>
    <div class="content">
        <el-row class="mb-4" :gutter="20">
            <el-col :md="8">
                <el-card shadow="never" class="!rounded-3xl">
                    <div class="mb-2">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 0.5H2.5C1.90326 0.5 1.33097 0.737053 0.90901 1.15901C0.487053 1.58097 0.25 2.15326 0.25 2.75V13.25C0.25 13.8467 0.487053 14.419 0.90901 14.841C1.33097 15.2629 1.90326 15.5 2.5 15.5H17.5C18.0967 15.5 18.669 15.2629 19.091 14.841C19.5129 14.419 19.75 13.8467 19.75 13.25V2.75C19.75 2.15326 19.5129 1.58097 19.091 1.15901C18.669 0.737053 18.0967 0.5 17.5 0.5ZM1.75 5H18.25V6.5H13C12.8011 6.5 12.6103 6.57902 12.4697 6.71967C12.329 6.86032 12.25 7.05109 12.25 7.25C12.25 7.84674 12.0129 8.41903 11.591 8.84099C11.169 9.26295 10.5967 9.5 10 9.5C9.40326 9.5 8.83097 9.26295 8.40901 8.84099C7.98705 8.41903 7.75 7.84674 7.75 7.25C7.75 7.05109 7.67098 6.86032 7.53033 6.71967C7.38968 6.57902 7.19891 6.5 7 6.5H1.75V5ZM2.5 2H17.5C17.6989 2 17.8897 2.07902 18.0303 2.21967C18.171 2.36032 18.25 2.55109 18.25 2.75V3.5H1.75V2.75C1.75 2.55109 1.82902 2.36032 1.96967 2.21967C2.11032 2.07902 2.30109 2 2.5 2ZM17.5 14H2.5C2.30109 14 2.11032 13.921 1.96967 13.7803C1.82902 13.6397 1.75 13.4489 1.75 13.25V8H6.325C6.49714 8.84772 6.95705 9.60986 7.62681 10.1573C8.29657 10.7047 9.13498 11.0038 10 11.0038C10.865 11.0038 11.7034 10.7047 12.3732 10.1573C13.043 9.60986 13.5029 8.84772 13.675 8H18.25V13.25C18.25 13.4489 18.171 13.6397 18.0303 13.7803C17.8897 13.921 17.6989 14 17.5 14Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                    <div class="font-normal text-sm">Total Saldo</div>
                    <div class="font-bold text-xl">{{ summary.total_saldo }}</div>
                </el-card>
            </el-col>
            <el-col :md="8">
                <el-card shadow="never" class="!rounded-3xl">
                    <div class="mb-2">
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.25 3H2.25C2.05109 3 1.86032 2.92098 1.71967 2.78033C1.57902 2.63968 1.5 2.44891 1.5 2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H15C15.1989 1.5 15.3897 1.42098 15.5303 1.28033C15.671 1.13968 15.75 0.948912 15.75 0.75C15.75 0.551088 15.671 0.360322 15.5303 0.21967C15.3897 0.0790178 15.1989 0 15 0H2.25C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25V14.25C0 14.8467 0.237053 15.419 0.65901 15.841C1.08097 16.2629 1.65326 16.5 2.25 16.5H17.25C17.6478 16.5 18.0294 16.342 18.3107 16.0607C18.592 15.7794 18.75 15.3978 18.75 15V4.5C18.75 4.10218 18.592 3.72064 18.3107 3.43934C18.0294 3.15804 17.6478 3 17.25 3ZM17.25 15H2.25C2.05109 15 1.86032 14.921 1.71967 14.7803C1.57902 14.6397 1.5 14.4489 1.5 14.25V4.37156C1.74082 4.45693 1.9945 4.50037 2.25 4.5H17.25V15ZM12.75 9.375C12.75 9.1525 12.816 8.93499 12.9396 8.74998C13.0632 8.56498 13.2389 8.42078 13.4445 8.33564C13.65 8.25049 13.8762 8.22821 14.0945 8.27162C14.3127 8.31502 14.5132 8.42217 14.6705 8.5795C14.8278 8.73684 14.935 8.93729 14.9784 9.15552C15.0218 9.37375 14.9995 9.59995 14.9144 9.80552C14.8292 10.0111 14.685 10.1868 14.5 10.3104C14.315 10.434 14.0975 10.5 13.875 10.5C13.5766 10.5 13.2905 10.3815 13.0795 10.1705C12.8685 9.95952 12.75 9.67337 12.75 9.375Z"
                                fill="currentColor" />
                        </svg>

                    </div>
                    <div class="font-normal text-sm">Total Pendanaan</div>
                    <div class="font-bold text-xl">{{ summary.total_dana }}</div>
                </el-card>
            </el-col>
            <el-col :md="8">
                <el-card shadow="never" class="!rounded-3xl">
                    <div class="mb-2">
                        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.4999 1.25V7.25C21.4999 7.44891 21.4209 7.63968 21.2803 7.78033C21.1396 7.92098 20.9488 8 20.7499 8C20.551 8 20.3603 7.92098 20.2196 7.78033C20.0789 7.63968 19.9999 7.44891 19.9999 7.25V3.06031L12.2806 10.7806C12.2109 10.8504 12.1282 10.9057 12.0371 10.9434C11.9461 10.9812 11.8485 11.0006 11.7499 11.0006C11.6514 11.0006 11.5538 10.9812 11.4627 10.9434C11.3717 10.9057 11.289 10.8504 11.2193 10.7806L7.99993 7.56031L1.78055 13.7806C1.63982 13.9214 1.44895 14.0004 1.24993 14.0004C1.05091 14.0004 0.860034 13.9214 0.719304 13.7806C0.578573 13.6399 0.499512 13.449 0.499512 13.25C0.499512 13.051 0.578573 12.8601 0.719304 12.7194L7.4693 5.96937C7.53896 5.89964 7.62168 5.84432 7.71272 5.80658C7.80377 5.76884 7.90137 5.74941 7.99993 5.74941C8.09849 5.74941 8.19609 5.76884 8.28713 5.80658C8.37818 5.84432 8.4609 5.89964 8.53055 5.96937L11.7499 9.18969L18.9396 2H14.7499C14.551 2 14.3603 1.92098 14.2196 1.78033C14.0789 1.63968 13.9999 1.44891 13.9999 1.25C13.9999 1.05109 14.0789 0.860322 14.2196 0.71967C14.3603 0.579018 14.551 0.5 14.7499 0.5H20.7499C20.9488 0.5 21.1396 0.579018 21.2803 0.71967C21.4209 0.860322 21.4999 1.05109 21.4999 1.25Z"
                                fill="currentColor" />
                        </svg>

                    </div>
                    <div class="font-normal text-sm">Total Investasi</div>
                    <div class="font-bold text-xl">{{ summary.total_investasi }}</div>
                </el-card>
            </el-col>
        </el-row>
        
        <h3 class="text-xl font-normal mb-4">Pengajual Modal Terbaru</h3>
        
        <el-card body-class="!py-2 !px-3" class="!rounded-2xl !mb-6" shadow="never">
            <el-table class="!text-xs min-w-full" :data="pinjamanModalBaru">
                <el-table-column prop="tgl" label="Tanggal" align="center" header-align="center"/>
                <el-table-column prop="umkm" label="Nama UMKM" align="center" header-align="center"/>
                <el-table-column prop="nominal" label="Nominal Pinjaman" align="center" header-align="center"/>
                <el-table-column prop="tempo" label="Durasi Pinjaman" align="center" width="140" header-align="center"/>
                <el-table-column label="Status" width="215" align="center" header-align="center">
                    <template #default="scope">
                        <state v-if="scope.row.status == 'draft'">
                            Menunggu Konfirmasi
                        </state>
                        <state v-else-if="scope.row.status == 'aktivasi'" >
                            Menunggu Aktivasi
                        </state>
                    </template>    
                </el-table-column>
                <el-table-column align="center" width="156">
                    <template #default="scope">
                        <el-button type="primary" class="!rounded-3xl !w-full"  v-if="scope.row.status == 'draft'">
                            Konfirmasi
                        </el-button>
                        <el-button type="primary" class="!rounded-3xl !w-full"  v-if="scope.row.status == 'aktivasi'">
                            Aktivasi
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <NuxtLink :to="{ name : 'pinjaman-pengajuan' }">
                <div class="text-center px-3 py-2">
                        Lihat Lainnya
                </div>
            </NuxtLink>
        </el-card>

        <h3 class="text-xl font-normal mb-4">Pengajuan Investasi Terbaru</h3>
        <el-card body-class="!py-2 !px-3" class="!rounded-2xl" shadow="never">
            <el-table class="!text-xs min-w-full" :data="investasiBaru">
                <el-table-column prop="tgl" label="Tanggal" align="center" header-align="center"/>
                <el-table-column prop="umkm" label="Nama UMKM" align="center" header-align="center"/>
                <el-table-column prop="nominal" label="Nominal Pinjaman" align="center" header-align="center"/>
                <el-table-column prop="tempo" label="Durasi Pinjaman" align="center" width="140" header-align="center"/>
                <el-table-column label="Status" width="215" align="center" header-align="center">
                    <template #default="scope">
                        <state v-if="scope.row.status == 'draft'">
                            Menunggu Konfirmasi
                        </state>
                        <state v-else-if="scope.row.status == 'pembayaran'" type="primary">
                            Menunggu Pembayaran
                        </state>
                        <state v-else-if="scope.row.status == 'ditolak'" type="danger">
                            Ditolak
                        </state>
                        <state v-else-if="scope.row.status == 'disetujui'" type="success">
                            Disetujui
                        </state>
                    </template>    
                </el-table-column>
                <el-table-column align="center" width="156">
                    <template #default="scope">
                        <el-button class="!rounded-3xl !w-full" :to="`/investasi/${ scope.row.id }`">
                            Detail
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4348 7.30977L6.05977 11.6848C6.01913 11.7254 5.97087 11.7577 5.91776 11.7797C5.86465 11.8017 5.80773 11.813 5.75024 11.813C5.69276 11.813 5.63584 11.8017 5.58273 11.7797C5.52962 11.7577 5.48136 11.7254 5.44071 11.6848C5.40006 11.6441 5.36782 11.5959 5.34582 11.5428C5.32382 11.4897 5.3125 11.4327 5.3125 11.3752C5.3125 11.3178 5.32382 11.2608 5.34582 11.2077C5.36782 11.1546 5.40006 11.1064 5.44071 11.0657L9.50673 7.00024L5.44071 2.93477C5.35862 2.85268 5.3125 2.74134 5.3125 2.62524C5.3125 2.50915 5.35862 2.3978 5.44071 2.31571C5.5228 2.23362 5.63415 2.1875 5.75024 2.1875C5.86634 2.1875 5.97768 2.23362 6.05977 2.31571L10.4348 6.69071C10.4755 6.73134 10.5077 6.7796 10.5297 6.83271C10.5518 6.88582 10.5631 6.94275 10.5631 7.00024C10.5631 7.05774 10.5518 7.11467 10.5297 7.16778C10.5077 7.22089 10.4755 7.26914 10.4348 7.30977Z" fill="black"/>
                            </svg>

                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <NuxtLink :to="{ name : 'investasi-pengajuan' }">
                <div class="text-center px-3 py-2">
                        Lihat Lainnya
                </div>
            </NuxtLink>
        </el-card>
    </div>
</template>

<script setup>
useHead({
    title: 'Dashboard' 
});

definePageMeta({ 
    title: 'Dashboard' 
});

import { ref } from 'vue';

const summary = ref({
    total_saldo : 350000000,
    total_dana : 150000000,
    total_investasi : 200000000,
});

const pinjamanModalBaru = ref([
    {
        tgl : '17/09/2024',
        umkm : 'Trifth123',
        nominal : 'Rp 2.000.000',
        tempo : '3 Bulan',
        status : 'draft'
    },
    {
        tgl : '17/09/2024',
        umkm : 'Bebas Gaya',
        nominal : 'Rp 10.000.000',
        tempo : '6 Bulan',
        status : 'aktivasi'
    },
    {
        tgl : '17/09/2024',
        umkm : 'GetClothes',
        nominal : 'Rp 4.000.000',
        tempo : '3 Bulan',
        status : 'aktivasi'
    },
    {
        tgl : '17/09/2024',
        umkm : '3.47 Shop',
        nominal : 'Rp 2.000.000',
        tempo : '3 Bulan',
        status : 'draft'
    },
]);

const investasiBaru = ref([
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'Trifth123',
        nominal : 'Rp 2.000.000',
        tempo : '3 Bulan',
        status : 'draft'
    },
    {
        id : 2,
        tgl : '17/09/2024',
        umkm : 'Bebas Gaya',
        nominal : 'Rp 10.000.000',
        tempo : '6 Bulan',
        status : 'ditolak'
    },
    {
        id : 3,
        tgl : '17/09/2024',
        umkm : 'GetClothes',
        nominal : 'Rp 4.000.000',
        tempo : '3 Bulan',
        status : 'disetujui'
    },
    {
        id : 4,
        tgl : '17/09/2024',
        umkm : '3.47 Shop',
        nominal : 'Rp 2.000.000',
        tempo : '3 Bulan',
        status : 'pembayaran'
    },
]);


</script>