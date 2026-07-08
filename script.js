function updateStatusToko (){
    const bulatStatus= document.getElementById('bulat-status');
    const teksStatus= document.getElementById('teks-status');

    const sekarang= new Date();
    const jam= sekarang.getHours();
    const menit= sekarang.getMinutes();

    const waktuSekarangDalamMenit= (jam * 60)+ menit;
    const waktuBukaDalamMenit= (8*60)+0;
    const waktuTutupDalamMenit= (16*60)+30;

    if (waktuSekarangDalamMenit >= waktuBukaDalamMenit && waktuSekarangDalamMenit < waktuTutupDalamMenit){
        teksStatus.textContent ='Yuk, Order sekarang!';
        bulatStatus.style.backgroundColor='#22c55e';
    } else {
        teksStatus.textContent ='Buka kembali besok jam 08.00';
        bulatStatus.style.backgroundColor='#ef4444';
    }
}


updateStatusToko();