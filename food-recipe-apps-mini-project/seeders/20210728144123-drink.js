'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Drinks', [{


      name: "Es Campur Buah Nutrijel",

      ingredients: 
      `Kelapa Muda Nutrijel
      1/2 buah alpukat
      1 buah naga merah
      1 buah kiwi
      5 biji nangka matang
      Secukupnya cincau
      Bahan kuah:
      1 liter air (air es)
      1 sachet SKM
      5-7 Sdm sirup coco pandan (marjan)
      opsional Es batu`,

      steps : 
      `1.Serut kelapa mudanya nutrijel, lihat di resep sebelumnya (lihat resep)
      2.Potong" semua buah dan cincau,
      3.Masukan dalam wadah semua bahan no 2.. tambahkan air,sirup dan SKM.. aduk" dan koreksi rasa..
      4.Bisa di taruh kulkas dulu sebelum di nikmati biar lebih segar dan dingin.,
      5.Bisa juga di tambahkan es batu....`,

      time: `Lunch`,

      hot_or_cold: 'Cold',

      image: `https://i1.wp.com/satujam.com/data/2015/10/resepescampurminumana-mhsjdbhsdjhsfc-kaya-reflections-blogspot-com.jpg?fit=900%2C675&ssl=1`,

      people: 1,

      createdAt: new Date(),
      updatedAt: new Date()

    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Drinks', null, {})
  }
};
