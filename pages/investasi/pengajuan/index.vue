<template>
    <div class="content">
        <el-row justify="space-between" class="mb-4">
            <el-col :md="12" class="flex">
                <el-radio-group v-model="tab">
                    <el-radio-button value="aktivasi" class="tab">
                        <div class="flex">
                            <svg class="me-2" width="18" height="15" viewBox="0 0 18 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.625 5.625C4.625 5.45924 4.69085 5.30027 4.80806 5.18306C4.92527 5.06585 5.08424 5 5.25 5H12.75C12.9158 5 13.0747 5.06585 13.1919 5.18306C13.3092 5.30027 13.375 5.45924 13.375 5.625C13.375 5.79076 13.3092 5.94973 13.1919 6.06694C13.0747 6.18415 12.9158 6.25 12.75 6.25H5.25C5.08424 6.25 4.92527 6.18415 4.80806 6.06694C4.69085 5.94973 4.625 5.79076 4.625 5.625ZM5.25 8.75H12.75C12.9158 8.75 13.0747 8.68415 13.1919 8.56694C13.3092 8.44973 13.375 8.29076 13.375 8.125C13.375 7.95924 13.3092 7.80027 13.1919 7.68306C13.0747 7.56585 12.9158 7.5 12.75 7.5H5.25C5.08424 7.5 4.92527 7.56585 4.80806 7.68306C4.69085 7.80027 4.625 7.95924 4.625 8.125C4.625 8.29076 4.69085 8.44973 4.80806 8.56694C4.92527 8.68415 5.08424 8.75 5.25 8.75ZM17.125 1.875V13.75C17.1249 13.8565 17.0977 13.9613 17.0457 14.0543C16.9938 14.1473 16.919 14.2255 16.8284 14.2815C16.7377 14.3374 16.6343 14.3693 16.5279 14.374C16.4214 14.3788 16.3156 14.3563 16.2203 14.3086L14 13.1984L11.7797 14.3086C11.6929 14.352 11.5971 14.3747 11.5 14.3747C11.4029 14.3747 11.3071 14.352 11.2203 14.3086L9 13.1984L6.77969 14.3086C6.69286 14.352 6.5971 14.3747 6.5 14.3747C6.4029 14.3747 6.30714 14.352 6.22031 14.3086L4 13.1984L1.77969 14.3086C1.68442 14.3563 1.57856 14.3788 1.47214 14.374C1.36572 14.3693 1.26228 14.3374 1.17165 14.2815C1.08101 14.2255 1.00618 14.1473 0.954258 14.0543C0.902339 13.9613 0.875057 13.8565 0.875 13.75V1.875C0.875 1.54348 1.0067 1.22554 1.24112 0.991116C1.47554 0.756696 1.79348 0.625 2.125 0.625H15.875C16.2065 0.625 16.5245 0.756696 16.7589 0.991116C16.9933 1.22554 17.125 1.54348 17.125 1.875ZM15.875 1.875H2.125V12.7391L3.72031 11.9406C3.80714 11.8972 3.9029 11.8746 4 11.8746C4.0971 11.8746 4.19286 11.8972 4.27969 11.9406L6.5 13.0516L8.72031 11.9406C8.80714 11.8972 8.9029 11.8746 9 11.8746C9.0971 11.8746 9.19286 11.8972 9.27969 11.9406L11.5 13.0516L13.7203 11.9406C13.8071 11.8972 13.9029 11.8746 14 11.8746C14.0971 11.8746 14.1929 11.8972 14.2797 11.9406L15.875 12.7391V1.875Z" fill="currentColor"/>
                            </svg>
                            Pengajuan Aktivasi
                        </div>
                    </el-radio-button>
                    <el-radio-button value="modal" class="tab">
                        <div class="flex">
                            <svg class="me-2" width="18" height="15" viewBox="0 0 18 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.625 5.625C4.625 5.45924 4.69085 5.30027 4.80806 5.18306C4.92527 5.06585 5.08424 5 5.25 5H12.75C12.9158 5 13.0747 5.06585 13.1919 5.18306C13.3092 5.30027 13.375 5.45924 13.375 5.625C13.375 5.79076 13.3092 5.94973 13.1919 6.06694C13.0747 6.18415 12.9158 6.25 12.75 6.25H5.25C5.08424 6.25 4.92527 6.18415 4.80806 6.06694C4.69085 5.94973 4.625 5.79076 4.625 5.625ZM5.25 8.75H12.75C12.9158 8.75 13.0747 8.68415 13.1919 8.56694C13.3092 8.44973 13.375 8.29076 13.375 8.125C13.375 7.95924 13.3092 7.80027 13.1919 7.68306C13.0747 7.56585 12.9158 7.5 12.75 7.5H5.25C5.08424 7.5 4.92527 7.56585 4.80806 7.68306C4.69085 7.80027 4.625 7.95924 4.625 8.125C4.625 8.29076 4.69085 8.44973 4.80806 8.56694C4.92527 8.68415 5.08424 8.75 5.25 8.75ZM17.125 1.875V13.75C17.1249 13.8565 17.0977 13.9613 17.0457 14.0543C16.9938 14.1473 16.919 14.2255 16.8284 14.2815C16.7377 14.3374 16.6343 14.3693 16.5279 14.374C16.4214 14.3788 16.3156 14.3563 16.2203 14.3086L14 13.1984L11.7797 14.3086C11.6929 14.352 11.5971 14.3747 11.5 14.3747C11.4029 14.3747 11.3071 14.352 11.2203 14.3086L9 13.1984L6.77969 14.3086C6.69286 14.352 6.5971 14.3747 6.5 14.3747C6.4029 14.3747 6.30714 14.352 6.22031 14.3086L4 13.1984L1.77969 14.3086C1.68442 14.3563 1.57856 14.3788 1.47214 14.374C1.36572 14.3693 1.26228 14.3374 1.17165 14.2815C1.08101 14.2255 1.00618 14.1473 0.954258 14.0543C0.902339 13.9613 0.875057 13.8565 0.875 13.75V1.875C0.875 1.54348 1.0067 1.22554 1.24112 0.991116C1.47554 0.756696 1.79348 0.625 2.125 0.625H15.875C16.2065 0.625 16.5245 0.756696 16.7589 0.991116C16.9933 1.22554 17.125 1.54348 17.125 1.875ZM15.875 1.875H2.125V12.7391L3.72031 11.9406C3.80714 11.8972 3.9029 11.8746 4 11.8746C4.0971 11.8746 4.19286 11.8972 4.27969 11.9406L6.5 13.0516L8.72031 11.9406C8.80714 11.8972 8.9029 11.8746 9 11.8746C9.0971 11.8746 9.19286 11.8972 9.27969 11.9406L11.5 13.0516L13.7203 11.9406C13.8071 11.8972 13.9029 11.8746 14 11.8746C14.0971 11.8746 14.1929 11.8972 14.2797 11.9406L15.875 12.7391V1.875Z" fill="currentColor"/>
                            </svg>
                            Pengajuan Investasi
                        </div>
                    </el-radio-button>
                </el-radio-group>
            </el-col>
            <el-col :md="8">
                <el-input type="text" v-model="params.search" placeholder="Masukan Nama/Tanggal">
                    <template #prefix>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9421 15.5595L13.0304 11.6485C14.1642 10.2874 14.7295 8.54148 14.6089 6.77409C14.4882 5.0067 13.6908 3.35387 12.3825 2.15943C11.0743 0.964993 9.35591 0.320904 7.58486 0.361154C5.81382 0.401404 4.12647 1.12289 2.87383 2.37554C1.62118 3.62818 0.899695 5.31553 0.859445 7.08657C0.819195 8.85762 1.46328 10.576 2.65772 11.8843C3.85217 13.1925 5.505 13.9899 7.27238 14.1106C9.03977 14.2312 10.7856 13.6659 12.1468 12.5321L16.0577 16.4438C16.1158 16.5019 16.1848 16.548 16.2606 16.5794C16.3365 16.6108 16.4178 16.627 16.4999 16.627C16.5821 16.627 16.6634 16.6108 16.7392 16.5794C16.8151 16.548 16.8841 16.5019 16.9421 16.4438C17.0002 16.3858 17.0463 16.3168 17.0777 16.241C17.1091 16.1651 17.1253 16.0838 17.1253 16.0016C17.1253 15.9195 17.1091 15.8382 17.0777 15.7623C17.0463 15.6865 17.0002 15.6175 16.9421 15.5595ZM2.12493 7.25164C2.12493 6.13912 2.45483 5.05159 3.07292 4.12656C3.691 3.20153 4.56951 2.48056 5.59734 2.05482C6.62517 1.62908 7.75617 1.51768 8.84732 1.73473C9.93846 1.95177 10.9407 2.4875 11.7274 3.27417C12.5141 4.06084 13.0498 5.06312 13.2669 6.15426C13.4839 7.2454 13.3725 8.3764 12.9468 9.40424C12.521 10.4321 11.8 11.3106 10.875 11.9287C9.94999 12.5467 8.86245 12.8766 7.74993 12.8766C6.2586 12.875 4.82882 12.2818 3.77429 11.2273C2.71975 10.1728 2.12659 8.74298 2.12493 7.25164Z" fill="black"/>
                        </svg>
                    </template>
                </el-input>
            </el-col>
        </el-row>

        <el-row justify="space-between" class="mb-4">
            <el-col :md="12">
                <base-radio-list v-model="params.status" :options="[
                    {
                        'label' : 'Semua',
                        'value' : 'semua',
                    },
                    {
                        'label' : 'Menunggu Konfirmasi',
                        'value' : 'draft',
                    },
                    {
                        'label' : 'Disetujui',
                        'value' : 'disetujui',
                    },
                    {
                        'label' : 'Ditolak',
                        'value' : 'ditolak',
                    },
                ]"/>
            </el-col>
            <el-col :md="8">
                <el-date-picker
                    v-model="params.date"
                    type="daterange"
                    unlink-panels
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    :size="large"
                />
            </el-col>
        </el-row>

        <el-card body-class="!py-2 !px-3" class="!rounded-2xl !mb-6" shadow="never">
            <template v-if="tab == 'aktivasi'">
                <el-table class="!text-xs min-w-full" :data="dataAktivasi">
                    <el-table-column prop="tgl" label="Tanggal" align="center" header-align="center"/>
                    <el-table-column prop="umkm" label="Nama UMKM" align="center" header-align="center"/>
                    <el-table-column prop="email" label="Email" align="center" header-align="center"/>
                    <el-table-column label="Status" width="215" align="center" header-align="center">
                        <template #default="scope">
                            <state v-if="scope.row.status == 'pending'">
                                Menunggu Konfirmasi
                            </state>
                            <state v-else-if="scope.row.status == 'aktif'" type="success">
                                Disetujui
                            </state>
                        </template>    
                    </el-table-column>
                    <el-table-column align="center" width="156">
                        <template #default="scope">
                            <NuxtLink class="el-button !rounded-3xl !w-full"  :to="{ name : 'investasi-pengajuan-aktivasi-id', params : { id : scope.row.id}}">
                                Detail
                            </NuxtLink>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="p-4">
                    <el-pagination background layout="prev, pager, next" :total="100" />
                </div>
            </template>
            <template v-else>
                <el-table class="!text-xs min-w-full" :data="dataModal">
                    <el-table-column prop="tgl" label="Tanggal" align="center" header-align="center"/>
                    <el-table-column prop="umkm" label="Nama UMKM" align="center" header-align="center"/>
                    <el-table-column prop="nominal" label="Target Funding" align="center" header-align="center"/>
                    <el-table-column label="Status" width="215" align="center" header-align="center">
                        <template #default="scope">
                            <state v-if="scope.row.status == 'pending'">
                                Menunggu Persetujuan
                            </state>
                            <state v-else-if="scope.row.status == 'disetujui'" type="success" >
                                Disetujui
                            </state>
                            <state v-else-if="scope.row.status == 'ditolak'" type="danger">
                                Ditolak
                            </state>
                        </template>    
                    </el-table-column>
                    <el-table-column align="center" width="156">
                        <template #default="scope">
                            <NuxtLink class="el-button !rounded-3xl !w-full" :to="{ name : 'investasi-pengajuan-investasi-id', params : { id : scope.row.id}}">
                                Detail
                            </NuxtLink>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="p-4">
                    <el-pagination background layout="prev, pager, next" :total="100" />
                </div>
            </template>
        </el-card>
        
    </div>
</template>


<script setup>
useHead({ 
    title: 'Pengajuan Investasi' 
});

definePageMeta({ 
    title: 'Pengajuan Investasi' 
});

const tab = ref('aktivasi');

const params = ref({
    date : null,
    status : 'semua'
});

const dataAktivasi = ref([
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'Trifth123',
        email : 'shoesclean@mail.com',
        status : 'pending'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'Bebas Gaya',
        email : 'laundrycare@mail.com',
        status : 'pending'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'GetClothes',
        email : 'fash123@mail.com',
        status : 'aktif'
    },
]);

const dataModal = ref([
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'Trifth123',
        nominal : 'Rp 2.000.000',
        tempo : '3 Bulan',
        status : 'pending'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'Bebas Gaya',
        nominal : 'Rp 10.000.000',
        tempo : '6 Bulan',
        status : 'disetujui'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'GetClothes',
        nominal : 'Rp 4.000.000',
        tempo : '3 Bulan',
        status : 'disetujui'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : '3.47 Shop',
        nominal : 'Rp 2.000.000',
        tempo : '3 Bulan',
        status : 'ditolak'
    },
]);

</script>