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
                <el-radio-button value="umkm" class="tab">
                    <div class="flex align-middle">
                        <svg class="me-2" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.125 5C17.1253 4.94189 17.1174 4.88403 17.1016 4.82812L15.9805 0.90625C15.9051 0.646027 15.7476 0.417159 15.5315 0.253823C15.3153 0.0904875 15.0522 0.00144761 14.7812 0H3.21875C2.94784 0.00144761 2.68467 0.0904875 2.46853 0.253823C2.25239 0.417159 2.09488 0.646027 2.01953 0.90625L0.899219 4.82812C0.88308 4.88399 0.874926 4.94185 0.875001 5V6.25C0.875001 6.73514 0.987954 7.21362 1.20492 7.64754C1.42188 8.08147 1.73689 8.45892 2.125 8.75V14.375C2.125 14.5408 2.19085 14.6997 2.30806 14.8169C2.42527 14.9342 2.58424 15 2.75 15H15.25C15.4158 15 15.5747 14.9342 15.6919 14.8169C15.8092 14.6997 15.875 14.5408 15.875 14.375V8.75C16.2631 8.45892 16.5781 8.08147 16.7951 7.64754C17.012 7.21362 17.125 6.73514 17.125 6.25V5ZM3.21875 1.25H14.7812L15.6734 4.375H2.32891L3.21875 1.25ZM7.125 5.625H10.875V6.25C10.875 6.74728 10.6775 7.22419 10.3258 7.57583C9.9742 7.92746 9.49728 8.125 9 8.125C8.50272 8.125 8.02581 7.92746 7.67418 7.57583C7.32254 7.22419 7.125 6.74728 7.125 6.25V5.625ZM5.875 5.625V6.25C5.87489 6.57243 5.79163 6.88938 5.63327 7.17023C5.47492 7.45109 5.24681 7.68637 4.97099 7.85334C4.69516 8.02031 4.38094 8.11333 4.05867 8.12342C3.7364 8.13351 3.41698 8.06033 3.13125 7.91094C3.08777 7.87709 3.03995 7.84924 2.98906 7.82812C2.72428 7.65861 2.50637 7.42524 2.35538 7.14947C2.20439 6.8737 2.12517 6.5644 2.125 6.25V5.625H5.875ZM14.625 13.75H3.375V9.3125C3.58075 9.35398 3.79011 9.37491 4 9.375C4.48514 9.375 4.96362 9.26205 5.39754 9.04508C5.83147 8.82812 6.20892 8.51311 6.5 8.125C6.79109 8.51311 7.16854 8.82812 7.60246 9.04508C8.03638 9.26205 8.51486 9.375 9 9.375C9.48514 9.375 9.96362 9.26205 10.3975 9.04508C10.8315 8.82812 11.2089 8.51311 11.5 8.125C11.7911 8.51311 12.1685 8.82812 12.6025 9.04508C13.0364 9.26205 13.5149 9.375 14 9.375C14.2099 9.37491 14.4192 9.35398 14.625 9.3125V13.75ZM15.0102 7.82812C14.9599 7.84928 14.9127 7.87686 14.8695 7.91016C14.5838 8.0597 14.2644 8.13304 13.9421 8.12307C13.6198 8.11311 13.3055 8.0202 13.0296 7.85329C12.7536 7.68639 12.5254 7.45115 12.367 7.1703C12.2085 6.88944 12.1252 6.57247 12.125 6.25V5.625H15.875V6.25C15.8747 6.56447 15.7954 6.87382 15.6443 7.1496C15.4931 7.42537 15.2751 7.6587 15.0102 7.82812Z"
                                fill="currentColor" />
                        </svg>

                        <div class="my-auto">Data UMKM</div>
                    </div>
                </el-radio-button>
                <el-radio-button value="investasi" class="tab">
                    <div class="flex align-middle">
                        <svg class="me-2" width="20" height="21" viewBox="0 0 20 21" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.1406 9.14375C19.0246 8.98292 18.872 8.852 18.6954 8.7618C18.5188 8.6716 18.3233 8.62471 18.125 8.625H16.875V7.375C16.875 7.04348 16.7433 6.72554 16.5089 6.49112C16.2745 6.2567 15.9565 6.125 15.625 6.125H10.2086L8.04219 4.5C7.82545 4.33842 7.56252 4.25078 7.29219 4.25H3.125C2.79348 4.25 2.47554 4.3817 2.24112 4.61612C2.0067 4.85054 1.875 5.16848 1.875 5.5V16.75C1.875 16.9158 1.94085 17.0747 2.05806 17.1919C2.17527 17.3092 2.33424 17.375 2.5 17.375H16.4922C16.6234 17.375 16.7512 17.3337 16.8577 17.257C16.9641 17.1803 17.0437 17.0721 17.0852 16.9477L19.3109 10.2703C19.3735 10.0824 19.3907 9.88238 19.3611 9.68657C19.3315 9.49076 19.256 9.30474 19.1406 9.14375ZM7.29219 5.5L9.625 7.25C9.73318 7.33114 9.86477 7.375 10 7.375H15.625V8.625H5.45078C5.18842 8.62498 4.9327 8.70752 4.71985 8.86091C4.507 9.01431 4.34782 9.23079 4.26484 9.47969L3.125 12.8984V5.5H7.29219ZM16.0422 16.125H3.36719L5.45078 9.875H18.125L16.0422 16.125Z"
                                fill="currentColor" />
                        </svg>
                        <div class="my-auto">
                            Data Investasi
                        </div>
                    </div>
                </el-radio-button>
                <el-radio-button value="statistik" class="tab">
                    <div class="flex align-middle">
                        <svg class="me-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.875 2.625H9.625V1.375C9.625 1.20924 9.55915 1.05027 9.44194 0.933058C9.32473 0.815848 9.16576 0.75 9 0.75C8.83424 0.75 8.67527 0.815848 8.55806 0.933058C8.44085 1.05027 8.375 1.20924 8.375 1.375V2.625H2.125C1.79348 2.625 1.47554 2.7567 1.24112 2.99112C1.0067 3.22554 0.875 3.54348 0.875 3.875V13.25C0.875 13.5815 1.0067 13.8995 1.24112 14.1339C1.47554 14.3683 1.79348 14.5 2.125 14.5H5.2L3.51172 16.6094C3.40812 16.7389 3.36021 16.9042 3.37852 17.0691C3.39683 17.2339 3.47987 17.3847 3.60938 17.4883C3.73888 17.5919 3.90423 17.6398 4.06905 17.6215C4.23388 17.6032 4.38468 17.5201 4.48828 17.3906L6.8 14.5H11.2L13.5117 17.3906C13.563 17.4547 13.6264 17.5081 13.6984 17.5477C13.7703 17.5874 13.8493 17.6124 13.9309 17.6215C14.0126 17.6305 14.0952 17.6235 14.174 17.6006C14.2529 17.5777 14.3265 17.5396 14.3906 17.4883C14.4547 17.437 14.5081 17.3736 14.5477 17.3016C14.5874 17.2297 14.6124 17.1507 14.6215 17.0691C14.6305 16.9874 14.6235 16.9048 14.6006 16.826C14.5777 16.7471 14.5396 16.6735 14.4883 16.6094L12.8 14.5H15.875C16.2065 14.5 16.5245 14.3683 16.7589 14.1339C16.9933 13.8995 17.125 13.5815 17.125 13.25V3.875C17.125 3.54348 16.9933 3.22554 16.7589 2.99112C16.5245 2.7567 16.2065 2.625 15.875 2.625ZM15.875 13.25H2.125V3.875H15.875V13.25ZM7.125 8.875V10.75C7.125 10.9158 7.05915 11.0747 6.94194 11.1919C6.82473 11.3092 6.66576 11.375 6.5 11.375C6.33424 11.375 6.17527 11.3092 6.05806 11.1919C5.94085 11.0747 5.875 10.9158 5.875 10.75V8.875C5.875 8.70924 5.94085 8.55027 6.05806 8.43306C6.17527 8.31585 6.33424 8.25 6.5 8.25C6.66576 8.25 6.82473 8.31585 6.94194 8.43306C7.05915 8.55027 7.125 8.70924 7.125 8.875ZM9.625 7.625V10.75C9.625 10.9158 9.55915 11.0747 9.44194 11.1919C9.32473 11.3092 9.16576 11.375 9 11.375C8.83424 11.375 8.67527 11.3092 8.55806 11.1919C8.44085 11.0747 8.375 10.9158 8.375 10.75V7.625C8.375 7.45924 8.44085 7.30027 8.55806 7.18306C8.67527 7.06585 8.83424 7 9 7C9.16576 7 9.32473 7.06585 9.44194 7.18306C9.55915 7.30027 9.625 7.45924 9.625 7.625ZM12.125 6.375V10.75C12.125 10.9158 12.0592 11.0747 11.9419 11.1919C11.8247 11.3092 11.6658 11.375 11.5 11.375C11.3342 11.375 11.1753 11.3092 11.0581 11.1919C10.9408 11.0747 10.875 10.9158 10.875 10.75V6.375C10.875 6.20924 10.9408 6.05027 11.0581 5.93306C11.1753 5.81585 11.3342 5.75 11.5 5.75C11.6658 5.75 11.8247 5.81585 11.9419 5.93306C12.0592 6.05027 12.125 6.20924 12.125 6.375Z"
                                fill="currentColor" />
                        </svg>
                        <div class="my-auto">
                            Statistik
                        </div>
                    </div>
                </el-radio-button>
                <el-radio-button value="funding" class="tab">
                    <div class="flex align-middle">
                        <svg class="me-2" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 9.5625C15 9.74792 14.945 9.92918 14.842 10.0833C14.739 10.2375 14.5926 10.3577 14.4213 10.4286C14.25 10.4996 14.0615 10.5182 13.8796 10.482C13.6977 10.4458 13.5307 10.3565 13.3996 10.2254C13.2685 10.0943 13.1792 9.92725 13.143 9.7454C13.1068 9.56354 13.1254 9.37504 13.1964 9.20373C13.2673 9.03243 13.3875 8.88601 13.5417 8.783C13.6958 8.67998 13.8771 8.625 14.0625 8.625C14.3111 8.625 14.5496 8.72377 14.7254 8.89959C14.9012 9.0754 15 9.31386 15 9.5625ZM11.875 5.5H8.75C8.58424 5.5 8.42527 5.56585 8.30806 5.68306C8.19085 5.80027 8.125 5.95924 8.125 6.125C8.125 6.29076 8.19085 6.44973 8.30806 6.56694C8.42527 6.68415 8.58424 6.75 8.75 6.75H11.875C12.0408 6.75 12.1997 6.68415 12.3169 6.56694C12.4342 6.44973 12.5 6.29076 12.5 6.125C12.5 5.95924 12.4342 5.80027 12.3169 5.68306C12.1997 5.56585 12.0408 5.5 11.875 5.5ZM19.375 9.25V11.75C19.375 12.2473 19.1775 12.7242 18.8258 13.0758C18.4742 13.4275 17.9973 13.625 17.5 13.625H17.3156L16.0492 17.1703C15.9625 17.4132 15.8028 17.6232 15.5921 17.7718C15.3813 17.9203 15.1297 18 14.8719 18H13.8781C13.6203 18 13.3687 17.9203 13.1579 17.7718C12.9472 17.6232 12.7875 17.4132 12.7008 17.1703L12.5508 16.75H8.07422L7.92422 17.1703C7.83752 17.4132 7.67783 17.6232 7.46706 17.7718C7.25628 17.9203 7.00473 18 6.74688 18H5.75313C5.49527 18 5.24372 17.9203 5.03294 17.7718C4.82217 17.6232 4.66249 17.4132 4.57578 17.1703L3.59375 14.4234C2.65952 13.3661 2.07454 12.0461 1.91875 10.6437C1.71705 10.7497 1.54814 10.9087 1.43027 11.1037C1.31241 11.2987 1.25007 11.5222 1.25 11.75C1.25 11.9158 1.18415 12.0747 1.06694 12.1919C0.949732 12.3092 0.79076 12.375 0.625 12.375C0.45924 12.375 0.300269 12.3092 0.183058 12.1919C0.065848 12.0747 0 11.9158 0 11.75C0.000954983 11.1926 0.188143 10.6516 0.531824 10.2128C0.875504 9.77396 1.35597 9.46259 1.89688 9.32812C2.0365 7.60572 2.81877 5.99882 4.08835 4.8265C5.35792 3.65418 7.02195 3.00219 8.75 3H16.875C17.0408 3 17.1997 3.06585 17.3169 3.18306C17.4342 3.30027 17.5 3.45924 17.5 3.625C17.5 3.79076 17.4342 3.94973 17.3169 4.06694C17.1997 4.18415 17.0408 4.25 16.875 4.25H15.2039C16.2411 4.97773 17.0569 5.97815 17.5609 7.14062C17.5945 7.21875 17.6273 7.29688 17.6586 7.375C18.1279 7.41483 18.565 7.62983 18.883 7.97724C19.2011 8.32464 19.3767 8.77902 19.375 9.25ZM18.125 9.25C18.125 9.08424 18.0592 8.92527 17.9419 8.80806C17.8247 8.69085 17.6658 8.625 17.5 8.625H17.2141C17.081 8.62514 16.9513 8.58278 16.8439 8.50409C16.7366 8.42539 16.6571 8.31448 16.6172 8.1875C16.2591 7.04479 15.5452 6.04642 14.5797 5.33808C13.6141 4.62974 12.4475 4.2485 11.25 4.25H8.75C7.65837 4.24994 6.59031 4.56752 5.67607 5.16402C4.76182 5.76051 4.04089 6.61014 3.60119 7.60929C3.16149 8.60845 3.02203 9.71396 3.19979 10.791C3.37756 11.8681 3.86489 12.8701 4.60234 13.675C4.65874 13.7363 4.7023 13.8083 4.73047 13.8867L5.75313 16.75H6.74688L7.04531 15.9148C7.08864 15.7935 7.16842 15.6885 7.27373 15.6142C7.37904 15.54 7.50473 15.5001 7.63359 15.5H12.9914C13.1203 15.5001 13.246 15.54 13.3513 15.6142C13.4566 15.6885 13.5364 15.7935 13.5797 15.9148L13.8781 16.75H14.8719L16.2867 12.7898C16.33 12.6685 16.4098 12.5635 16.5151 12.4892C16.6205 12.415 16.7461 12.3751 16.875 12.375H17.5C17.6658 12.375 17.8247 12.3092 17.9419 12.1919C18.0592 12.0747 18.125 11.9158 18.125 11.75V9.25Z"
                                fill="currentColor" />
                        </svg>
                        <div class="my-auto">
                            Funding
                        </div>
                    </div>
                </el-radio-button>
                <el-radio-button value="deviden" class="tab">
                    <div class="flex align-middle">
                        <svg class="me-2" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.3565 12.4741C17.4624 12.6011 17.5136 12.7649 17.499 12.9297C17.4844 13.0944 17.405 13.2466 17.2784 13.353C15.9221 14.4764 14.7112 14.8757 13.6065 14.8757C12.1549 14.8757 10.8862 14.1874 9.7057 13.5475C7.72523 12.4733 6.01507 11.5452 3.52836 13.6053C3.46568 13.6609 3.39247 13.7033 3.31309 13.73C3.2337 13.7567 3.14976 13.7672 3.06624 13.7608C2.98273 13.7545 2.90135 13.7314 2.82693 13.6929C2.75251 13.6545 2.68658 13.6015 2.63306 13.5371C2.57953 13.4726 2.53949 13.3981 2.51533 13.3179C2.49117 13.2377 2.48338 13.1535 2.49242 13.0702C2.50145 12.9869 2.52713 12.9063 2.56793 12.8332C2.60873 12.76 2.66382 12.6958 2.72992 12.6444C5.8682 10.0452 8.22367 11.3225 10.3026 12.4507C12.283 13.5249 13.9932 14.4522 16.4799 12.3921C16.6073 12.2873 16.7709 12.2372 16.9351 12.2525C17.0993 12.2679 17.2507 12.3475 17.3565 12.4741ZM3.52836 8.61003C6.01507 6.54987 7.72523 7.47721 9.7057 8.55143C10.8862 9.19206 12.1549 9.87956 13.6065 9.87956C14.7112 9.87956 15.9221 9.48034 17.2784 8.3569C17.3445 8.30546 17.3995 8.24126 17.4403 8.16811C17.4811 8.09496 17.5068 8.01436 17.5159 7.93109C17.5249 7.84782 17.5171 7.76358 17.4929 7.68338C17.4688 7.60319 17.4287 7.52866 17.3752 7.46424C17.3217 7.39982 17.2558 7.34681 17.1813 7.30837C17.1069 7.26993 17.0255 7.24684 16.942 7.24047C16.8585 7.2341 16.7746 7.24459 16.6952 7.2713C16.6158 7.29801 16.5426 7.3404 16.4799 7.39596C13.9932 9.45612 12.283 8.52799 10.3026 7.45378C8.22367 6.32643 5.8682 5.04831 2.72992 7.64753C2.61255 7.75591 2.54114 7.90512 2.53036 8.06451C2.51958 8.2239 2.57024 8.38137 2.67194 8.50457C2.77364 8.62777 2.91866 8.70735 3.07721 8.72696C3.23575 8.74658 3.39579 8.70473 3.52445 8.61003H3.52836Z"
                                fill="currentColor" />
                        </svg>
                        <div class="my-auto">
                            Deviden
                        </div>
                    </div>
                </el-radio-button>
            </el-radio-group>
            <template v-if="tab == 'umkm'">
                <el-row :gutter="20">
                    <el-col :md="18">
                        <h3 class="text-xl mb-4">Informasi UMKM</h3>
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
            <template v-else-if="tab == 'investasi'">
                <h3 class="text-xl mb-4">Informasi Investasi</h3>
                <el-row :gutter="16" class="mb-4">
                    <el-col :md="8">
                        <el-card shadow="never" class="!rounded-3xl">
                            <base-reader label="Total Dana Investasi">
                                {{ investasi.dana }}
                            </base-reader>
                        </el-card>
                    </el-col>
                    <el-col :md="8">
                        <el-card shadow="never" class="!rounded-3xl">
                            <base-reader label="Total Keuntungan">
                                {{ investasi.keuntungan }}
                            </base-reader>
                        </el-card>
                    </el-col>
                    <el-col :md="8">
                        <el-card shadow="never" class="!rounded-3xl">
                            <base-reader label="Total Kerugian">
                                {{ investasi.kerugian }}
                            </base-reader>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="16" class="mb-4">
                    <el-col :md="8">
                        <el-card shadow="never" class="!rounded-3xl">
                            <base-reader label="Pembagian Bunga/Dividen">
                                {{ investasi.pembagian_deviden }}
                            </base-reader>
                        </el-card>
                    </el-col>
                    <el-col :md="8">
                        <el-card shadow="never" class="!rounded-3xl">
                            <base-reader label="Laporan Belum Diterima">
                                {{ investasi.laporan_belum_terima }}
                            </base-reader>
                        </el-card>
                    </el-col>
                    <el-col :md="8">
                        <el-card shadow="never" class="!rounded-3xl">
                            <base-reader label="Dana Belum Didistribustikan">
                                {{ investasi.dana_belum_distribusi }}
                            </base-reader>
                        </el-card>
                    </el-col>
                </el-row>
                <base-reader label="Nama Proyek" class="mb-4">
                    {{ investasi.nama }}
                </base-reader>
                <el-row :gutter="20" class="mb-4">
                    <el-col :md="12">
                        <base-reader label="Jumlah Pendanaan yang Dibutuhkan">
                            {{ investasi.pendanaan }}
                        </base-reader>
                    </el-col>
                    <el-col :md="12">
                        <base-reader label="Jangka Waktu Funding">
                            {{ investasi.tgl_mulai }} - {{ investasi.tgl_selesai}}
                        </base-reader>
                    </el-col>
                </el-row>
                <base-reader label="Pembagian Keuntungan" class="mb-4">
                {{ investasi.deviden_pemilik }} Pemilik Usaha : {{ investasi.deviden_investor}}
                </base-reader>
                <el-row :gutter="20" class="mb-4">
                    <el-col :md="12">
                        <base-reader label="Jangka Waktu Investasi">
                            {{ investasi.tempo }} <span class="text-sm text-zinc-400">(Terhitung saat pengajuan disetujui)</span>
                        </base-reader>
                    </el-col>
                    <el-col :md="12">
                        <base-reader label="Periode Pembagian Bunga/Dividen">
                            {{ investasi.deviden_periode }}
                        </base-reader>
                    </el-col>
                </el-row>
                <base-reader label="Deskripsi" class="mb-4">
                {{ investasi.deskripsi }}
                </base-reader>
                <base-reader label="Dokumen Rencana Keuangan" class="mb-4">
                    <a href="">{{ investasi.dok_rencana_keuangan }}</a>
                </base-reader>
                <base-reader label="Dokumen Analisis Risiko Usaha" class="mb-4">
                    <a href="">{{ investasi.dok_analisis_resiko }}</a>
                </base-reader>
                <base-reader label="Dokumen ROI (Return on Investment)" class="mb-4">
                    <a href="">{{ investasi.dok_roi }}</a>
                </base-reader>
                <base-reader label="Dokumen Rencana Bisnis" class="mb-4">
                    <a href="">{{ investasi.dok_rencana_bisnis }}</a>
                </base-reader>
                <base-reader label="Dokumen Kerja Sama" class="mb-4">
                    <a href="">{{ investasi.dok_perjanjian }}</a>
                </base-reader>
                <div class="flex justify-end">
                    <base-reader label="Tanda Tangan Digital">
                        <img :src="investasi.ttd" class="h-full"/>
                    </base-reader>
                </div>
            </template>
            <template v-else-if="tab == 'statistik'">
                <div class="flex justify-between align-middle">
                    <h3 class="text-xl mb-4">Statistik Penjualan</h3>
                </div>
                <el-row :gutter="20" class="mb-4">
                    <el-col :md="12">
                        <base-reader label="Total Pendapatan">
                            {{ stats.pendapatan }}
                        </base-reader>
                    </el-col>
                    <el-col :md="12">
                        <base-reader label="Total Pengeluaran">
                            {{ stats.pengeluaran }}
                        </base-reader>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="mb-4">
                    <el-col :md="12">
                        <base-reader label="Total Keuntungan">
                            {{ stats.keuntungan }}
                        </base-reader>
                    </el-col>
                    <el-col :md="12">
                        <base-reader label="Total Kerugian">
                            {{ stats.kerugian }}
                        </base-reader>
                    </el-col>
                </el-row>
            </template>
            <template v-else-if="tab == 'funding'">
                <h3 class="text-xl mb-4">Informasi Funding</h3>
                <el-row :gutter="20" class="mb-4">
                    <el-col :md="12">
                        <base-reader label="Target Funding" class="mb-4">
                            {{ funding.target }}
                        </base-reader>
                    </el-col>
                    <el-col :md="12">
                        <base-reader label="Dana Terkumpul" class="mb-4">
                            {{ funding.terkumpul }}
                        </base-reader>
                    </el-col>
                    <el-col :md="12">
                        <base-reader label="Jangka Waktu Funding" class="mb-4">
                            {{ funding.tgl_mulai }} - {{ funding.tgl_selesai }}
                        </base-reader>
                    </el-col>
                </el-row>
                <el-progress :percentage="funding.prorgres_percentage" :stroke-width="16" class="mb-4"/>
                <h3 class="text-xl mb-4">Laporan Penggunaan Dana</h3>
                <div class="mb-4 border-b" v-for="(d, i) in pengeluaranList" :key="i">
                    <el-row :gutter="20" class="mb-4">
                        <el-col :md="12">
                            <base-reader label="Tanggal" class="mb-4">
                                {{ d.tgl }}
                            </base-reader>
                        </el-col>
                        <el-col :md="12">
                            <base-reader label="Penggunaan Dana" class="mb-4">
                                {{ d.jumlah }}
                            </base-reader>
                        </el-col>
                    </el-row>
                    <base-reader label="Tujuan Penggunaan" class="mb-4">
                        {{ d.tujuan }}
                    </base-reader>
                    <base-reader label="Kendala" class="mb-4">
                        {{ d.kendala ?? '-' }}
                    </base-reader>
                </div>
            </template>
            <template v-else>
                <div class="flex justify-between align-middle">
                    <h3 class="text-xl mb-4">Bunga/Dividen Investasi</h3>
                </div>
                <el-row :gutter="20" class="mb-4">
                    <el-col :md="12">
                        <base-reader label="Status Pembayaran Dividen UMKM">
                            <state type="success" class="!text-base">
                                Pembayaran Diterima
                            </state>
                        </base-reader>
                    </el-col>
                    <el-col :md="12">
                        <base-reader label="Total Bunga/Dividen">
                            {{ deviden.bunga }}
                        </base-reader>
                    </el-col>
                </el-row>
                <div class="border-b border-t py-3" v-for="(d,i) in deviden.pembagian" :key="i">
                    <div class="flex align-middle mb-4">
                        <img :src="d.image" class="rounded-full w-11 h-11 me-2"/>
                        <div class="font-semibold my-auto text-xl">{{ d.investor }}</div>
                    </div>
                    <el-row :gutter="20" class="mb-4">
                        <el-col :md="8">
                            <base-reader label="Investasi Awal">
                                {{ d.dana }}
                            </base-reader>
                        </el-col>
                        <el-col :md="8">
                            <base-reader label="Dividen/Bunga per Periode">
                                {{ d.bunga }}
                            </base-reader>
                        </el-col>
                        <el-col :md="8">
                            <base-reader label="Tanggal Pembagian">
                                {{ d.tgl }}
                            </base-reader>
                        </el-col>
                    </el-row>
                    <div class="flex justify-between align-middle">
                        <div>
                            <state type="success" class="text-base" v-if="d.status == 'done'">
                                Dividen Berhasil Didistribustikan
                            </state>
                            <state class="text-base" v-else>
                                Menunggu Pendistribusian Dana
                            </state>
                        </div>

                        <el-button class="!rounded-3xl !py-3 !px-6" type="primary" v-if="d.status == 'pending'">
                            Kirim Dividen
                            <svg class="ms-2" width="16" height="14" viewBox="0 0 16 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.3172 7.44254L9.69219 13.0675C9.57491 13.1848 9.41585 13.2507 9.25 13.2507C9.08415 13.2507 8.92509 13.1848 8.80781 13.0675C8.69054 12.9503 8.62465 12.7912 8.62465 12.6253C8.62465 12.4595 8.69054 12.3004 8.80781 12.1832L13.3664 7.62535H1.125C0.95924 7.62535 0.800269 7.5595 0.683058 7.44229C0.565848 7.32508 0.5 7.16611 0.5 7.00035C0.5 6.83459 0.565848 6.67562 0.683058 6.55841C0.800269 6.4412 0.95924 6.37535 1.125 6.37535H13.3664L8.80781 1.81753C8.69054 1.70026 8.62465 1.5412 8.62465 1.37535C8.62465 1.2095 8.69054 1.05044 8.80781 0.93316C8.92509 0.815885 9.08415 0.75 9.25 0.75C9.41585 0.75 9.57491 0.815885 9.69219 0.93316L15.3172 6.55816C15.3753 6.61621 15.4214 6.68514 15.4529 6.76101C15.4843 6.83688 15.5005 6.91821 15.5005 7.00035C15.5005 7.08248 15.4843 7.16381 15.4529 7.23969C15.4214 7.31556 15.3753 7.38449 15.3172 7.44254Z"
                                    fill="currentColor" />
                            </svg>

                        </el-button>
                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const route = useRoute();
useHead({ 
    title: 'Detail Investasi' 
});

definePageMeta({ 
    title: 'Detail Investasi' 
});
const tab = ref('umkm');

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

const stats = ref({
    pendapatan : 'Rp 20.000.000',
    pengeluaran : 'Rp 9.000.000',
    keuntungan : 'Rp 11.000.000',
    kerugian : 0,
});

const funding = ref({
    target : 'Rp 100.000.000',
    terkumpul : 'Rp 32.000.000',
    tgl_mulai : '2024-11-05',
    tgl_selesai : '2025-01-30',
    prorgres_percentage : 40,
    kerugian : 0,
});
const investasi = ref({
    dana : 'Rp 350.000.000',
    keuntungan : 'Rp 410.000.000',
    kerugian : 0,
    pembagian_deviden : 3,
    laporan_belum_terima : 0,
    dana_belum_distribusi : 2,
    nama : 'Digitalisasi Usaha',
    pendanaan : 'Rp 100.000.000',
    tgl_mulai : '2024-11-05',
    tgl_selesai : '2025-01-30',
    deviden_pemilik : '70%',
    deviden_investor : '30%',
    tempo : '3 Tahun',
    deviden_periode : 'Per Kuartal / 4 kali dalam setahun',
    deskripsi : 'Lorem ipsum dolor sit amet consectetur. Bibendum tellus integer scelerisque at eget a. In tempus malesuada risus dui luctus non neque.',
    dok_rencana_keuangan : 'Rencana_Keuangan_LaundryCare_2024',
    dok_analisis_resiko : 'Analisis_Risiko Usaha_LaundryCare_2024',
    dok_roi : 'Analisis_Risiko Usaha_LaundryCare_2024',
    dok_rencana_bisnis : 'Rencana_Bisnis_LaundryCare_2024',
    dok_perjanjian : 'Perjanjian_Kerja Sama_Investasi_LaundryCare_DapurInvest_2024',
    ttd : '/images/ttd.png'
});

const pengeluaranList = ref([
    {
        tgl : '2024-11-24',
        jumlah : 500000,
        tujuan : 'Pembuatan Aplikasi Monitoring',
        kendala : null,
    },
    {
        tgl : '2024-10-12',
        jumlah : 300000,
        tujuan : 'Penambahan Stok Produk',
        kendala : null,
    }
]);

const deviden = ref({
    status : 'lunas',
    bunga : 'Rp 15.350.000',
    pembagian : [
        {
            investor : 'Ervan',
            image : '/images/donatur.png',
            dana : 'Rp 3.000.000',
            bunga : 'Rp 750.000',
            tgl : '01 April 2024',
            status : 'done'
        },
        {
            investor : 'Irshal',
            image : '/images/donatur.png',
            dana : 'Rp 3.000.000',
            bunga : 'Rp 750.000',
            tgl : '01 April 2024',
            status : 'pending'
        },
    ]
});

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