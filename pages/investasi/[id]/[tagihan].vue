<template>
    <div class="content">
        <div class="flex justify-between align-middle mb-4">
            <base-reader label="Tanggal Pembayaran">
                {{ data.created_at }}
            </base-reader>
            <div class="flex">
                <state v-if="data.status == 'paid'" type="success" class="!px-10 !text-base">
                    <div class="my-auto">Pembayaran Diterima</div>
                </state>
                <state v-else-if="data.status == 'overdue'" type="danger" class="!px-10 !text-base">
                    <div class="my-auto">Lewat Jatuh Tempo</div>
                </state>
                <state v-else class="!px-10 !text-base">
                    <div class="my-auto">Belum Dibayar</div>
                </state>
            </div>
        </div>
        <el-card class="!rounded-2xl !mb-6" shadow="never">
            <h3 class="text-xl mb-4">Pembayaran Tagihan</h3>
            <el-row class="mb-4">
                <el-col :md="12">
                    <base-reader label="Nama UMKM">
                        {{ data.umkm }}
                    </base-reader>
                </el-col>
                <el-col :md="12">
                    <base-reader label="No. Telepon">
                        {{ data.telp }}
                    </base-reader>
                </el-col>
            </el-row>
            <el-row class="mb-4">
                <el-col :md="12">
                    <base-reader label="Metode Pembayaran">
                        {{ data.metode }}
                    </base-reader>
                </el-col>
                <el-col :md="12">
                    <base-reader label="Virtual Account">
                        {{ data.va }}
                    </base-reader>
                </el-col>
            </el-row>
            <base-reader label="Total Pembayaran" class="mb-4">
                {{ data.jumlah }}
            </base-reader>
            <h3 class="text-xl mb-4">Pemberi Pinjaman</h3>

            <NuxtLink v-for="(d,i) in donaturList" :key="i" :to="{name : 'pinjaman-id-tagihan', params : { tagihan : d.id }}">
                <el-card shadow="hover" class="!rounded-md !mb-2">
                    <div class="flex justify-between align-middle">
                        <div class="flex align-middle">
                            <div class="my-auto">
                                <img :src="d.image" class="rounded-full h-12 w-12"/>
                            </div>
                            <div class="ms-4">
                                <div class="text-xl font-semibold">
                                    {{ d.nama }}
                                </div>
                                <div class="text-zinc-400 text-sm font-normal mb-1">
                                    Total Dana : 
                                    <span class="text-gray-900 font-semibold"> 
                                        {{ d.jumlah }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="my-auto">
                            <div class="text-base text-green-700 font-semibold" v-if="d.status =='done'">
                                Dana Berhasil Didistribustikan
                            </div>
                            <el-button class="!rounded-3xl !py-4 !px-6" type="primary" v-else>
                                Distribustikan Dana
                                <svg class="ms-2" width="20" height="21" viewBox="0 0 20 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.3172 10.9425L11.6922 16.5675C11.5749 16.6848 11.4159 16.7507 11.25 16.7507C11.0841 16.7507 10.9251 16.6848 10.8078 16.5675C10.6905 16.4503 10.6247 16.2912 10.6247 16.1253C10.6247 15.9595 10.6905 15.8004 10.8078 15.6832L15.3664 11.1253H3.125C2.95924 11.1253 2.80027 11.0595 2.68306 10.9423C2.56585 10.8251 2.5 10.6661 2.5 10.5003C2.5 10.3346 2.56585 10.1756 2.68306 10.0584C2.80027 9.9412 2.95924 9.87535 3.125 9.87535H15.3664L10.8078 5.31753C10.6905 5.20026 10.6247 5.0412 10.6247 4.87535C10.6247 4.7095 10.6905 4.55044 10.8078 4.43316C10.9251 4.31588 11.0841 4.25 11.25 4.25C11.4159 4.25 11.5749 4.31588 11.6922 4.43316L17.3172 10.0582C17.3753 10.1162 17.4214 10.1851 17.4529 10.261C17.4843 10.3369 17.5005 10.4182 17.5005 10.5003C17.5005 10.5825 17.4843 10.6638 17.4529 10.7397C17.4214 10.8156 17.3753 10.8845 17.3172 10.9425Z"
                                        fill="currentColor" />
                                </svg>

                            </el-button>
                        </div>

                    </div>
                </el-card>
            </NuxtLink>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const route = useRoute();
useHead({ 
    title: 'Detail Tagihan' 
});

definePageMeta({ 
    title: 'Detail Tagihan' 
});


const data = ref({
    created_at : '2024-10-30 09:00',
    metode : 'Bank Central Asia (BCA)',
    telp : '0892129037129312',
    umkm : 'Laundry Care',
    va : '123819283123123',
    jumlah : 'Rp 3.000.000',
    status : 'paid'
});

const donaturList = ref([
    {
        id : 1,
        nama : 'Irshal',
        image : '/images/donatur.png',
        jumlah : 'Rp 10.000.000',
        tgl : '2024-10-30 09:00',
        status : 'done',
    },
    {
        id : 2,
        nama : 'David',
        image : '/images/donatur.png',
        jumlah : 'Rp 10.000.000',
        tgl : '2024-10-30 09:00',
        status : 'pending',
    },
    {
        id : 1,
        nama : 'Norman',
        image : '/images/donatur.png',
        jumlah : 'Rp 10.000.000',
        tgl : '2024-10-30 09:00',
        status : 'pending',
    }
]);

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