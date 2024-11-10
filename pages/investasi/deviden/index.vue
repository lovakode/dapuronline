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
                    v-model="params.date"
                    type="month"
                    size="large"
                    format="MMMM YYYY"
                    value-format="YYYY-MM-DD"
                />
            </el-col>
        </el-row>

        <el-card body-class="!py-2 !px-3" class="!rounded-2xl !mb-6" shadow="never">
            <el-table class="!text-xs min-w-full" :data="investorList">
                <el-table-column label="Nama Investasi" align="center" header-align="center" width="253">
                    <template #default="scope">
                        <div class="flex align-middle justify-start">
                            <img :src="scope.row.image" class="rounded-full h-6 me-2"/>
                            <div>{{ scope.row.umkm }} - {{ scope.row.proyek }}</div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="total_investor" label="Total Investor" width="100" align="center" header-align="center"/>
                <el-table-column prop="periode" label="Periode Pembagian" width="126" align="center" header-align="center"/>
                <el-table-column prop="investasi" label="Total Investasi" align="center" header-align="center"/>
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
                <el-table-column align="center" width="156">
                    <template #default="scope">
                        <NuxtLink class="el-button !rounded-3xl !w-full" :to="{ name : 'investasi-deviden-id', params : { id : scope.row.id}}">
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
        </el-card>
        
    </div>
</template>


<script setup>
useHead({ 
    title: 'Manajemen Investasi & Dividen' 
});

definePageMeta({ 
    title: 'Manajemen Investasi & Dividen' 
});

const tab = ref('aktivasi');

const params = ref({
    date : null,
    status : 'semua'
});

const investorList = ref([
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'JoeShoes',
        image : '/images/laundry.png',
        total_investor : 10,
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
        total_investor : 10,
        proyek : 'Digitalisasi Usaha',
        investasi : 'Rp 50.000.000',
        periode : 'Kuartal',
        status : 'funding'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'FashMyFist',
        image : '/images/laundry.png',
        total_investor : 10,
        proyek : 'Digitalisasi Usaha',
        investasi : 'Rp 60.000.000',
        periode : 'Per Bulan',
        status : 'selesai'
    },
    {
        id : 1,
        tgl : '17/09/2024',
        umkm : 'Salman',
        image : '/images/laundry.png',
        total_investor : 10,
        proyek : 'Digitalisasi Usaha',
        investasi : 'Rp 80.000.000',
        periode : 'Per Bulan',
        status : 'aktif'
    },
]);

</script>