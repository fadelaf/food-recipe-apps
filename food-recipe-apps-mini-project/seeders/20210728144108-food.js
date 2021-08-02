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
    await queryInterface.bulkInsert('Food',[{

      name: "Nasi Goreng Rendang",
      ingredients: 
      `500 gr nasi dingin
      Seadanya rendang daging berikut bumbunya (sy 5 ptg), suwir2
      1 btr telur, dibuat dadar tipis dan diiris (telur rawis)
      Bumbu halus :
      7 cabe rawit merah (atau sesuai selera pedas masing2)
      6 bawang merah
      3 bawang putih
      1 sdt garam
      1 sdt kaldu bubuk`,

      steps : 
      `1. Siapkan semua bahan dan bumbu
      2. Tumis bumbu halus sampai harum, masukan daging rendang berikut bumbunya dan aduk rata.
      Masukan nasi dan aduk sampai rata serta nasi panas.
      Koreksi rasanya, tambahkan garam jika masih kurang asin.
      Aduk rata kembali
      3. Nasi goreng rendang siap disajikan dengan telur rawis dan taburan bawang goreng`,

      time: `Lunch`,

      kind: "Main Course",

      image: `https://i1.wp.com/resepkoki.id/wp-content/uploads/2018/01/Resep-Nasi-Goreng-Rendang.jpg?fit=1280%2C953&ssl=1`,

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
    await queryInterface.bulkDelete('Food', null, {})
  }
};
