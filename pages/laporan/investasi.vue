<template>
    <div class="content">
        <el-row justify="space-between" class="mb-4">
            <el-col :md="8">
                <el-input type="text" v-model="params.search" placeholder="Masukan Nama/Tanggal">
                    <template #prefix>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.9421 15.5595L13.0304 11.6485C14.1642 10.2874 14.7295 8.54148 14.6089 6.77409C14.4882 5.0067 13.6908 3.35387 12.3825 2.15943C11.0743 0.964993 9.35591 0.320904 7.58486 0.361154C5.81382 0.401404 4.12647 1.12289 2.87383 2.37554C1.62118 3.62818 0.899695 5.31553 0.859445 7.08657C0.819195 8.85762 1.46328 10.576 2.65772 11.8843C3.85217 13.1925 5.505 13.9899 7.27238 14.1106C9.03977 14.2312 10.7856 13.6659 12.1468 12.5321L16.0577 16.4438C16.1158 16.5019 16.1848 16.548 16.2606 16.5794C16.3365 16.6108 16.4178 16.627 16.4999 16.627C16.5821 16.627 16.6634 16.6108 16.7392 16.5794C16.8151 16.548 16.8841 16.5019 16.9421 16.4438C17.0002 16.3858 17.0463 16.3168 17.0777 16.241C17.1091 16.1651 17.1253 16.0838 17.1253 16.0016C17.1253 15.9195 17.1091 15.8382 17.0777 15.7623C17.0463 15.6865 17.0002 15.6175 16.9421 15.5595ZM2.12493 7.25164C2.12493 6.13912 2.45483 5.05159 3.07292 4.12656C3.691 3.20153 4.56951 2.48056 5.59734 2.05482C6.62517 1.62908 7.75617 1.51768 8.84732 1.73473C9.93846 1.95177 10.9407 2.4875 11.7274 3.27417C12.5141 4.06084 13.0498 5.06312 13.2669 6.15426C13.4839 7.2454 13.3725 8.3764 12.9468 9.40424C12.521 10.4321 11.8 11.3106 10.875 11.9287C9.94999 12.5467 8.86245 12.8766 7.74993 12.8766C6.2586 12.875 4.82882 12.2818 3.77429 11.2273C2.71975 10.1728 2.12659 8.74298 2.12493 7.25164Z"
                                fill="currentColor" />
                        </svg>
                    </template>
                </el-input>
            </el-col>
            <el-col :md="8">
                <el-date-picker
                    class="!w-full !text-end"
                    v-model="params.date"
                    type="month"
                    size="large"
                    format="MMMM YYYY"
                    value-format="YYYY-MM-DD"
                />
            </el-col>
        </el-row>

        <el-row class="mb-4" :gutter="16">
            <el-col :md="8">
                <el-card shadow="never" class="!rounded-3xl">
                    <div class="mb-2">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 0.5H2.5C1.90326 0.5 1.33097 0.737053 0.90901 1.15901C0.487053 1.58097 0.25 2.15326 0.25 2.75V13.25C0.25 13.8467 0.487053 14.419 0.90901 14.841C1.33097 15.2629 1.90326 15.5 2.5 15.5H17.5C18.0967 15.5 18.669 15.2629 19.091 14.841C19.5129 14.419 19.75 13.8467 19.75 13.25V2.75C19.75 2.15326 19.5129 1.58097 19.091 1.15901C18.669 0.737053 18.0967 0.5 17.5 0.5ZM1.75 5H18.25V6.5H13C12.8011 6.5 12.6103 6.57902 12.4697 6.71967C12.329 6.86032 12.25 7.05109 12.25 7.25C12.25 7.84674 12.0129 8.41903 11.591 8.84099C11.169 9.26295 10.5967 9.5 10 9.5C9.40326 9.5 8.83097 9.26295 8.40901 8.84099C7.98705 8.41903 7.75 7.84674 7.75 7.25C7.75 7.05109 7.67098 6.86032 7.53033 6.71967C7.38968 6.57902 7.19891 6.5 7 6.5H1.75V5ZM2.5 2H17.5C17.6989 2 17.8897 2.07902 18.0303 2.21967C18.171 2.36032 18.25 2.55109 18.25 2.75V3.5H1.75V2.75C1.75 2.55109 1.82902 2.36032 1.96967 2.21967C2.11032 2.07902 2.30109 2 2.5 2ZM17.5 14H2.5C2.30109 14 2.11032 13.921 1.96967 13.7803C1.82902 13.6397 1.75 13.4489 1.75 13.25V8H6.325C6.49714 8.84772 6.95705 9.60986 7.62681 10.1573C8.29657 10.7047 9.13498 11.0038 10 11.0038C10.865 11.0038 11.7034 10.7047 12.3732 10.1573C13.043 9.60986 13.5029 8.84772 13.675 8H18.25V13.25C18.25 13.4489 18.171 13.6397 18.0303 13.7803C17.8897 13.921 17.6989 14 17.5 14Z"
                                fill="black" />
                        </svg>
                    </div>
                    <div class="font-normal text-sm">Total Saldo Investasi</div>
                    <div class="font-bold text-xl">{{ summary.total_saldo }}</div>
                </el-card>
            </el-col>
            <el-col :md="8">
                <el-card shadow="never" class="!rounded-3xl">
                    <div class="mb-2">
                        <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.25 7.74953H4.5V13.7495H3C2.80109 13.7495 2.61032 13.8286 2.46967 13.9692C2.32902 14.1099 2.25 14.3006 2.25 14.4995C2.25 14.6984 2.32902 14.8892 2.46967 15.0299C2.61032 15.1705 2.80109 15.2495 3 15.2495H21C21.1989 15.2495 21.3897 15.1705 21.5303 15.0299C21.671 14.8892 21.75 14.6984 21.75 14.4995C21.75 14.3006 21.671 14.1099 21.5303 13.9692C21.3897 13.8286 21.1989 13.7495 21 13.7495H19.5V7.74953H21.75C21.9132 7.74937 22.0719 7.69599 22.202 7.59748C22.3321 7.49898 22.4265 7.36073 22.4709 7.20371C22.5153 7.04669 22.5073 6.87946 22.4481 6.7274C22.3889 6.57533 22.2817 6.44673 22.1428 6.3611L12.3928 0.361096C12.2747 0.288457 12.1387 0.25 12 0.25C11.8613 0.25 11.7253 0.288457 11.6072 0.361096L1.85719 6.3611C1.71828 6.44673 1.61108 6.57533 1.55187 6.7274C1.49266 6.87946 1.48466 7.04669 1.52908 7.20371C1.57351 7.36073 1.66793 7.49898 1.79803 7.59748C1.92814 7.69599 2.08681 7.74937 2.25 7.74953ZM6 7.74953H9V13.7495H6V7.74953ZM13.5 7.74953V13.7495H10.5V7.74953H13.5ZM18 13.7495H15V7.74953H18V13.7495ZM12 1.87985L19.1006 6.24953H4.89937L12 1.87985ZM23.25 17.4995C23.25 17.6984 23.171 17.8892 23.0303 18.0299C22.8897 18.1705 22.6989 18.2495 22.5 18.2495H1.5C1.30109 18.2495 1.11032 18.1705 0.96967 18.0299C0.829018 17.8892 0.75 17.6984 0.75 17.4995C0.75 17.3006 0.829018 17.1099 0.96967 16.9692C1.11032 16.8286 1.30109 16.7495 1.5 16.7495H22.5C22.6989 16.7495 22.8897 16.8286 23.0303 16.9692C23.171 17.1099 23.25 17.3006 23.25 17.4995Z"
                                fill="currentColor" />
                        </svg>

                    </div>
                    <div class="font-normal text-sm">Total Investasi Masuk</div>
                    <div class="font-bold text-xl">{{ summary.total_pendanaan }}</div>
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
                    <div class="font-normal text-sm">Pembagian Dividen</div>
                    <div class="font-bold text-xl">{{ summary.total_dana_keluar }}</div>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="16" class="mb-4">
            <el-col :md="8">
                <el-card shadow="never" class="!rounded-3xl">
                    <div class="font-normal text-sm">Pembagian Bunga/Dividen</div>
                    <div class="font-bold text-xl">{{ summary.belum_dterima }}</div>
                </el-card>
            </el-col>
            <el-col :md="8">
                <el-card shadow="never" class="!rounded-3xl">
                    <div class="font-normal text-sm">Laporan Belum Diterima</div>
                    <div class="font-bold text-xl">{{ summary.belum_distribusi }}</div>
                </el-card>
            </el-col>
            <el-col :md="8">
                <el-card shadow="never" class="!rounded-3xl">
                    <div class="font-normal text-sm">Dana Belum Didistribustikan</div>
                    <div class="font-bold text-xl">{{ summary.menunggu_bayar }}</div>
                </el-card>
            </el-col>
        </el-row>

        <div class="flex align-middle justify-between mb-4">
            <h3 class="text-xl font-semibold leading-7 my-auto">
                Riwayat Transaksi
            </h3>
            <el-dropdown popper-class="!rounded-xl">
                <el-button class="!rounded-3xl !py-5 !px-6">
                    {{ params.status }}
                    <svg class="ms-1" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0306 1.53104L9.53055 9.03104C9.4609 9.10077 9.37818 9.15609 9.28713 9.19384C9.19608 9.23158 9.09849 9.25101 8.99993 9.25101C8.90137 9.25101 8.80377 9.23158 8.71272 9.19384C8.62168 9.15609 8.53896 9.10077 8.4693 9.03104L0.969304 1.53104C0.828573 1.39031 0.749512 1.19944 0.749512 1.00042C0.749512 0.801394 0.828573 0.610522 0.969304 0.469792C1.11003 0.329061 1.30091 0.25 1.49993 0.25C1.69895 0.25 1.88982 0.329061 2.03055 0.469792L8.99993 7.4401L15.9693 0.469792C16.039 0.400109 16.1217 0.344834 16.2128 0.307122C16.3038 0.26941 16.4014 0.25 16.4999 0.25C16.5985 0.25 16.6961 0.26941 16.7871 0.307122C16.8781 0.344834 16.9609 0.400109 17.0306 0.469792C17.1002 0.539474 17.1555 0.6222 17.1932 0.713245C17.2309 0.804289 17.2503 0.901871 17.2503 1.00042C17.2503 1.09896 17.2309 1.19654 17.1932 1.28759C17.1555 1.37863 17.1002 1.46136 17.0306 1.53104Z" fill="currentColor"/>
                    </svg>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu class="w-52 !p-2 !rounded-xl">
                        <el-dropdown-item class="!py-3 !px-4 !text-base !rounded-lg" v-for="(d, i) in statusList" :key="i" @click.prevent="setStatus(d.value)">
                            {{ d.label }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

        <el-card body-class="!py-2 !px-3" class="!rounded-2xl !mb-6" shadow="never">
            <el-table class="!text-xs min-w-full" :data="pinjamanList">
                <el-table-column prop="tgl" label="Tanggal Transaksi" width="150" align="center" header-align="center"/>
                <el-table-column label="Nama UMKM" align="center" header-align="center">
                    <template #default="scope">
                        <div class="flex align-middle justify-start">
                            <img :src="scope.row.image" class="rounded-full h-6 me-2"/>
                            <div>{{ scope.row.umkm }} - {{ scope.row.proyek }}</div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Dana Masuk" width="126" align="center" header-align="center">
                    <template #default="scope">
                        {{ scope.row.credit ?? '-'}}
                    </template>
                </el-table-column>
                <el-table-column label="Dana Keluar" width="126" align="center" header-align="center">
                    <template #default="scope">
                        {{ scope.row.debit ?? '-'}}
                    </template>
                </el-table-column>
                <el-table-column label="Status" width="215" align="center" header-align="center">
                    <template #default="scope">
                        <state v-if="scope.row.status == 'funding'" type="warning">
                            Funding
                        </state>
                        <state v-else-if="scope.row.status == 'aktif'" type="success" >
                            Aktif
                        </state>
                        <state v-else-if="scope.row.status == 'selesai'" type="primary">
                            Selesai
                        </state>
                        <state v-else-if="scope.row.status == 'lunas'" type="warning">
                            Lunas
                        </state>
                    </template>    
                </el-table-column>
            </el-table>
            <div class="p-4 flex justify-center">
                <el-pagination background layout="prev, pager, next" :total="100" />
            </div>
        </el-card>
        
    </div>
</template>


<script setup>
useHead({ 
    title: 'Laporan Investasi' 
});

definePageMeta({ 
    title: 'Laporan Investasi' 
});

const tab = ref('aktivasi');

const params = ref({
    date : null,
    status : 'Semua Status'
});

const setStatus = (val) => {

};

const summary = ref({
    total_saldo : 'Rp 350.000.000',
    total_pendanaan : 'Rp 150.000.000',
    total_dana_keluar : 'Rp 200.000.000',
    belum_dterima : '3',
    belum_distribusi : '3',
    menunggu_bayar : 2
});

const statusList = ref([
    {
        label : 'Semua Status',
        value : 'Semua Status',
    },
    {
        label : 'Aktif',
        value : 'Aktif',
    },
    {
        label : 'Funding',
        value : 'Funding',
    },
    {
        label : 'Selesai',
        value : 'Selesai',
    },
]);

const pinjamanList = ref([
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'JoeShoes',
        image : '/images/laundry.png',
        credit : 'Rp. 30.000.000',
        debit : null,
        proyek : 'Digitalisasi Usaha',
        investasi : 'Rp 30.000.000',
        periode : 'Kuartal',
        status : 'funding'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'MyClothes',
        image : '/images/laundry.png',
        credit : 'Rp. 1.000.000',
        debit : null,
        proyek : 'Digitalisasi Usaha',
        investasi : 'Rp 50.000.000',
        periode : 'Kuartal',
        status : 'funding'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'MyClothes',
        image : '/images/laundry.png',
        credit : 'Rp. 500.000',
        debit : null,
        proyek : 'Digitalisasi Usaha',
        investasi : 'Rp 50.000.000',
        periode : 'Kuartal',
        status : 'funding'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'JoeShoes',
        image : '/images/laundry.png',
        debit : 'Rp. 30.000.000',
        credit : null,
        proyek : 'Digitalisasi Usaha',
        investasi : 'Rp 30.000.000',
        periode : 'Kuartal',
        status : 'aktif'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'MyClothes',
        image : '/images/laundry.png',
        debit : 'Rp. 1.000.000',
        credit : null,
        proyek : 'Digitalisasi Usaha',
        investasi : 'Rp 50.000.000',
        periode : 'Kuartal',
        status : 'aktif'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'MyClothes',
        image : '/images/laundry.png',
        debit : 'Rp. 500.000',
        credit : null,
        proyek : 'Digitalisasi Usaha',
        investasi : 'Rp 50.000.000',
        periode : 'Kuartal',
        status : 'aktif'
    },
]);

</script>