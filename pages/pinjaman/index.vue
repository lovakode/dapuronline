<template>
    <div class="content">
        <el-row justify="space-between" class="mb-4">
            <el-col :md="12" class="flex">
                <el-radio-group v-model="tab">
                    <el-radio-button value="aktivasi" class="tab">
                        <div class="flex align-middle">
                            <svg class="me-2" width="20" height="21" viewBox="0 0 20 21" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 2.375C8.39303 2.375 6.82214 2.85152 5.486 3.74431C4.14985 4.6371 3.10844 5.90605 2.49348 7.3907C1.87852 8.87535 1.71762 10.509 2.03112 12.0851C2.34463 13.6612 3.11846 15.1089 4.25476 16.2452C5.39106 17.3815 6.8388 18.1554 8.4149 18.4689C9.99099 18.7824 11.6247 18.6215 13.1093 18.0065C14.594 17.3916 15.8629 16.3502 16.7557 15.014C17.6485 13.6779 18.125 12.107 18.125 10.5C18.1227 8.34581 17.266 6.28051 15.7427 4.75727C14.2195 3.23403 12.1542 2.37727 10 2.375ZM10 17.375C8.64026 17.375 7.31105 16.9718 6.18046 16.2164C5.04987 15.4609 4.16868 14.3872 3.64833 13.1309C3.12798 11.8747 2.99183 10.4924 3.2571 9.15875C3.52238 7.82513 4.17716 6.60013 5.13864 5.63864C6.10013 4.67716 7.32514 4.02237 8.65876 3.7571C9.99238 3.49183 11.3747 3.62798 12.631 4.14833C13.8872 4.66868 14.9609 5.54987 15.7164 6.68045C16.4718 7.81104 16.875 9.14025 16.875 10.5C16.8729 12.3227 16.1479 14.0702 14.8591 15.3591C13.5702 16.6479 11.8227 17.3729 10 17.375ZM15 10.5C15 10.6658 14.9342 10.8247 14.8169 10.9419C14.6997 11.0592 14.5408 11.125 14.375 11.125H10C9.83424 11.125 9.67527 11.0592 9.55806 10.9419C9.44085 10.8247 9.375 10.6658 9.375 10.5V6.125C9.375 5.95924 9.44085 5.80027 9.55806 5.68306C9.67527 5.56585 9.83424 5.5 10 5.5C10.1658 5.5 10.3247 5.56585 10.4419 5.68306C10.5592 5.80027 10.625 5.95924 10.625 6.125V9.875H14.375C14.5408 9.875 14.6997 9.94085 14.8169 10.0581C14.9342 10.1753 15 10.3342 15 10.5Z"
                                    fill="currentColor" />
                            </svg>
                            <div class="my-auto">Pinjaman UMKM</div>
                        </div>
                    </el-radio-button>
                    <el-radio-button value="modal" class="tab">
                        <div class="flex align-middle">
                            <svg class="me-2" width="20" height="21" viewBox="0 0 20 21" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.16026 12.8394C9.99791 12.2817 10.6339 11.4693 10.9741 10.5223C11.3143 9.5752 11.3407 8.5438 11.0494 7.58058C10.7581 6.61735 10.1646 5.77344 9.35653 5.17364C8.54851 4.57384 7.56891 4.25 6.5626 4.25C5.55629 4.25 4.57669 4.57384 3.76867 5.17364C2.96065 5.77344 2.3671 6.61735 2.0758 7.58058C1.78449 8.5438 1.8109 9.5752 2.15111 10.5223C2.49133 11.4693 3.12729 12.2817 3.96494 12.8394C2.4497 13.3979 1.15565 14.4313 0.275881 15.7855C0.229643 15.8542 0.197527 15.9314 0.181398 16.0127C0.165269 16.0939 0.165449 16.1776 0.181929 16.2587C0.198409 16.3399 0.230858 16.417 0.277392 16.4855C0.323926 16.554 0.383616 16.6126 0.452992 16.6579C0.522368 16.7031 0.600047 16.7341 0.681512 16.7491C0.762978 16.7641 0.846606 16.7627 0.927534 16.7451C1.00846 16.7274 1.08508 16.6939 1.15293 16.6464C1.22078 16.5988 1.2785 16.5383 1.32276 16.4683C1.89025 15.5955 2.66678 14.8782 3.58185 14.3817C4.49691 13.8852 5.52151 13.6251 6.5626 13.6251C7.60369 13.6251 8.62829 13.8852 9.54335 14.3817C10.4584 14.8782 11.235 15.5955 11.8024 16.4683C11.8941 16.6046 12.0357 16.6992 12.1966 16.7319C12.3576 16.7646 12.5249 16.7326 12.6624 16.6429C12.8 16.5532 12.8967 16.413 12.9317 16.2525C12.9666 16.0921 12.9371 15.9243 12.8493 15.7855C11.9695 14.4313 10.6755 13.3979 9.16026 12.8394ZM3.1251 8.9394C3.1251 8.25953 3.32671 7.59492 3.70442 7.02963C4.08214 6.46434 4.619 6.02374 5.24713 5.76357C5.87525 5.50339 6.56641 5.43532 7.23322 5.56795C7.90003 5.70059 8.51254 6.02798 8.99328 6.50872C9.47402 6.98947 9.80141 7.60197 9.93405 8.26878C10.0667 8.93559 9.99861 9.62676 9.73844 10.2549C9.47826 10.883 9.03767 11.4199 8.47237 11.7976C7.90708 12.1753 7.24247 12.3769 6.5626 12.3769C5.65124 12.3759 4.77749 12.0134 4.13306 11.3689C3.48863 10.7245 3.12613 9.85077 3.1251 8.9394ZM19.5423 16.6503C19.4035 16.7409 19.2344 16.7725 19.0722 16.7384C18.91 16.7043 18.768 16.6071 18.6774 16.4683C18.1106 15.595 17.3342 14.8774 16.4189 14.3811C15.5037 13.8848 14.4788 13.6255 13.4376 13.6269C13.2718 13.6269 13.1129 13.5611 12.9957 13.4438C12.8784 13.3266 12.8126 13.1677 12.8126 13.0019C12.8126 12.8361 12.8784 12.6772 12.9957 12.56C13.1129 12.4427 13.2718 12.3769 13.4376 12.3769C13.9438 12.3764 14.4437 12.2641 14.9015 12.0481C15.3593 11.832 15.7637 11.5175 16.0859 11.127C16.4081 10.7366 16.64 10.2797 16.7652 9.78923C16.8903 9.29871 16.9056 8.78661 16.8099 8.28952C16.7142 7.79242 16.5098 7.3226 16.2115 6.91362C15.9132 6.50464 15.5282 6.1666 15.0841 5.92365C14.64 5.6807 14.1477 5.53884 13.6424 5.5082C13.1371 5.47757 12.6313 5.55892 12.161 5.74643C12.0844 5.77958 12.0018 5.79702 11.9183 5.79772C11.8348 5.79843 11.752 5.78238 11.6748 5.75054C11.5975 5.7187 11.5275 5.6717 11.4688 5.61233C11.41 5.55296 11.3638 5.48241 11.3327 5.40486C11.3017 5.32731 11.2866 5.24433 11.2881 5.16082C11.2897 5.07731 11.3081 4.99497 11.342 4.91866C11.376 4.84235 11.4249 4.77362 11.4858 4.71653C11.5468 4.65944 11.6186 4.61515 11.697 4.58628C12.7731 4.1571 13.9701 4.14165 15.0569 4.54292C16.1438 4.94419 17.0435 5.73374 17.5826 6.75926C18.1217 7.78477 18.2619 8.97359 17.9761 10.0964C17.6904 11.2191 16.999 12.1963 16.0353 12.8394C17.5505 13.3979 18.8445 14.4313 19.7243 15.7855C19.8148 15.9243 19.8465 16.0934 19.8124 16.2556C19.7783 16.4178 19.6811 16.5598 19.5423 16.6503Z"
                                    fill="currentColor" />
                            </svg>
                            <div class="my-auto">
                                Donator
                            </div>
                        </div>
                    </el-radio-button>
                </el-radio-group>
            </el-col>
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
        </el-row>

        <el-row justify="space-between" class="mb-4">
            <el-col :md="12">
                <base-radio-list v-model="params.status" :options="[
                    {
                        'label' : 'Semua',
                        'value' : 'semua',
                    },
                    {
                        'label' : 'Aktif',
                        'value' : 'aktif',
                    },
                    {
                        'label' : 'Selesai',
                        'value' : 'selesai',
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
                <el-table class="!text-xs min-w-full" :data="dataPinjaman">
                    <el-table-column prop="tgl" label="Tanggal" align="center" header-align="center"/>
                    <el-table-column prop="umkm" label="Nama UMKM" align="center" header-align="center"/>
                    <el-table-column prop="target" label="Target Investasi" align="center" header-align="center"/>
                    <el-table-column label="Tagihan Bulan Ini" align="center" header-align="center">
                        <template #default="scope">
                            <span v-if="scope.row.tagihan_sekarang == 'paid'" class="text-green-700">
                                Pembayaran Diterima 
                            </span>
                            <span v-else-if="scope.row.tagihan_sekarang == 'unpaid'">
                                Belum Bayar 
                            </span>
                            <span v-else-if="scope.row.tagihan_sekarang == 'overdue'" class="text-red-500">
                                Lewat Jatuh Tempo
                            </span>
                            <span v-else>-</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Status" width="153" align="center" header-align="center">
                        <template #default="scope">
                            <state v-if="scope.row.status == 'lunas'" type="warning">
                                Lunas
                            </state>
                            <state v-else-if="scope.row.status == 'aktif'" type="success">
                                Aktif
                            </state>
                        </template>    
                    </el-table-column>
                    <el-table-column align="center" width="156">
                        <template #default="scope">
                            <NuxtLink class="el-button !rounded-3xl !w-full"  :to="{ name : 'pinjaman-id', params : { id : scope.row.id}}">
                                Detail
                                <svg class="ms-2" width="6" height="10" viewBox="0 0 6 10" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.43453 5.30977L1.05953 9.68478C1.01888 9.72542 0.970626 9.75767 0.917516 9.77966C0.864407 9.80166 0.807484 9.81299 0.749999 9.81299C0.692514 9.81299 0.635591 9.80166 0.582482 9.77966C0.529372 9.75767 0.481116 9.72542 0.440468 9.68478C0.399819 9.64413 0.367576 9.59587 0.345577 9.54276C0.323578 9.48965 0.312256 9.43273 0.312256 9.37524C0.312256 9.31776 0.323578 9.26084 0.345577 9.20773C0.367576 9.15462 0.399819 9.10636 0.440468 9.06571L4.50648 5.00024L0.440468 0.934775C0.358375 0.852682 0.312256 0.74134 0.312256 0.625243C0.312256 0.509147 0.358375 0.397805 0.440468 0.315712C0.52256 0.233619 0.633902 0.1875 0.749999 0.1875C0.866096 0.1875 0.977438 0.233619 1.05953 0.315712L5.43453 4.69071C5.47521 4.73134 5.50748 4.7796 5.52949 4.83271C5.55151 4.88582 5.56284 4.94275 5.56284 5.00024C5.56284 5.05774 5.55151 5.11467 5.52949 5.16778C5.50748 5.22089 5.47521 5.26914 5.43453 5.30977Z"
                                        fill="currentColor" />
                                </svg>
                            </NuxtLink>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="p-4">
                    <el-pagination background layout="prev, pager, next" :total="100" />
                </div>
            </template>
            <template v-else>
                <el-table class="!text-xs min-w-full" :data="dataDonator">
                    <el-table-column prop="tgl" label="Tanggal" align="center" header-align="center"/>
                    <el-table-column label="Nama Donator" align="center" header-align="center">
                        <template #default="scope">
                            <div class="flex align-middle justify-start">
                                <img :src="scope.row.image" class="rounded-full h-6 me-2"/>
                                <div>{{ scope.row.nama }}</div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="pendanaan" label="Nominal Pinjaman" align="center" header-align="center"/>
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
                            <state v-else-if="scope.row.status == 'lunas'" type="warning">
                                Lunas
                            </state>
                        </template>    
                    </el-table-column>
                    <el-table-column align="center" width="156">
                        <template #default="scope">
                            <NuxtLink class="el-button !rounded-3xl !w-full" :to="{ name : 'pinjaman-donatur-id', params : { id : scope.row.id}}">
                                Detail
                                <svg class="ms-2" width="6" height="10" viewBox="0 0 6 10" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.43453 5.30977L1.05953 9.68478C1.01888 9.72542 0.970626 9.75767 0.917516 9.77966C0.864407 9.80166 0.807484 9.81299 0.749999 9.81299C0.692514 9.81299 0.635591 9.80166 0.582482 9.77966C0.529372 9.75767 0.481116 9.72542 0.440468 9.68478C0.399819 9.64413 0.367576 9.59587 0.345577 9.54276C0.323578 9.48965 0.312256 9.43273 0.312256 9.37524C0.312256 9.31776 0.323578 9.26084 0.345577 9.20773C0.367576 9.15462 0.399819 9.10636 0.440468 9.06571L4.50648 5.00024L0.440468 0.934775C0.358375 0.852682 0.312256 0.74134 0.312256 0.625243C0.312256 0.509147 0.358375 0.397805 0.440468 0.315712C0.52256 0.233619 0.633902 0.1875 0.749999 0.1875C0.866096 0.1875 0.977438 0.233619 1.05953 0.315712L5.43453 4.69071C5.47521 4.73134 5.50748 4.7796 5.52949 4.83271C5.55151 4.88582 5.56284 4.94275 5.56284 5.00024C5.56284 5.05774 5.55151 5.11467 5.52949 5.16778C5.50748 5.22089 5.47521 5.26914 5.43453 5.30977Z"
                                        fill="currentColor" />
                                </svg>
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
    title: 'Manajemn Pinjaman' 
});

definePageMeta({ 
    title: 'Manajemn Pinjaman' 
});

const tab = ref('aktivasi');

const params = ref({
    date : null,
    status : 'semua'
});

const dataPinjaman = ref([
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'Trifth123',
        target : 'Rp 50.000.0000',
        status : 'aktif',
        tagihan_sekarang : 'paid',
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'Bebas Gaya',
        target : 'Rp 50.000.0000',
        status : 'aktif',
        tagihan_sekarang : 'overdue',
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'GetClothes',
        target : 'Rp 50.000.0000',
        status : 'aktif',
        tagihan_sekarang : 'unpaid',
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'Warung Ibu AAS',
        target : 'Rp 50.000.0000',
        status : 'lunas',
        tagihan_sekarang : null
    },
]);

const dataDonator = ref([
    {
        id : 1,
        tgl : '17/09/2024',
        nama : 'Irshal',
        image : '/images/donator.jpg',
        pendanaan : 'Rp 10.000.000',
        status : 'pending'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        nama : 'David',
        image : '/images/donator.jpg',
        pendanaan : 'Rp 5.000.000',
        status : 'disetujui'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        nama : 'Nizar',
        image : '/images/donator.jpg',
        pendanaan : 'Rp 6.000.000',
        status : 'lunas'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        nama : 'Salman',
        image : '/images/donator.jpg',
        pendanaan : 'Rp 11.000.000',
        status : 'ditolak'
    },
]);

</script>