/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Berita:
 *       type: object
 *       properties:
 *         FileName:
 *           type: string
 *           example: "upload/img/4839180-pilkada.png"
 *         title:
 *           type: string
 *           example: "KPU Cirebon menerima 1.195 koli surat suara untuk kebutuhan pilkada"
 *         desc:
 *           type: string
 *           example: "Komisi Pemilihan Umum (KPU) Kabupaten Cirebon, Jawa Barat, sudah menerima 1.195 koli surat suara Pemilihan Kepala"
 *         status:
 *           type: string
 *           enum: ['Publish', 'Draf Redaksi']
 *           example: "Draf Redaksi"
 *         catagoryId:
 *           type: string
 *           example: "f29a5e5c-ec42-4ac6-ae7b-ef3cb8dcf02e"
 *         Catagory:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Pilkada 2024"
 */

/**
 * @swagger
 * /app/v1/cms/berita:
 *   get:
 *     summary: list berita
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: list of berita
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Berita'
 */

/**
 * @swagger
 * /app/v1/cms/berita:
 *   post:
 *     summary: Create new berita 
 *     description: berita baru, termasuk hubungan one-to-one dengan detail.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               FileName:
 *                 type: string
 *                 example: "upload/img/4839180-pilkada.png" 
 *               title:
 *                 type: string
 *                 example: "KPU Cirebon menerima 1.195 koli surat suara untuk kebutuhan pilkada"
 *               desc:
 *                 type: string
 *                 example: "Komisi Pemilihan Umum (KPU) Kabupaten Cirebon, Jawa Barat, sudah menerima 1.195 koli surat suara Pemilihan Kepala"
 *               status:
 *                 type: string
 *                 enum: ['Publish', 'Draf Redaksi']
 *                 example: "Draf Redaksi"
 *               catagoryId:
 *                 type: string
 *                 example: "f29a5e5c-ec42-4ac6-ae7b-ef3cb8dcf02e"
 *               detail:
 *                 type: object
 *                 properties:
 *                   isiBerita:
 *                     type: string
 *                     example: "Komisi Pemilihan Umum (KPU) Kabupaten Cirebon, Jawa Barat, sudah menerima 1.195 koli surat suara Pemilihan Kepala"
 *                   author:
 *                     type: string
 *                     example: "Rachel Farahdiba Regar"
 *                   editor:
 *                     type: string
 *                     example: "Rachel Farahdiba Regar"
 *     responses:
 *       201:
 *         description: Create successfully
 *       400:
 *         description: Tidak ada kategori dengan ID yang diberikan
 */

/**
 * @swagger
 * /app/v1/cms/berita:
 *   put:
 *     summary: Update berita 
 *     description: update berita lama, termasuk hubungan one-to-one dengan detail.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               FileName:
 *                 type: string
 *                 example: "upload/img/4839180-pilkada.png" 
 *               title:
 *                 type: string
 *                 example: "KPU Cirebon menerima 1.195 koli surat suara untuk kebutuhan pilkada"
 *               desc:
 *                 type: string
 *                 example: "Komisi Pemilihan Umum (KPU) Kabupaten Cirebon, Jawa Barat, sudah menerima 1.195 koli surat suara Pemilihan Kepala"
 *               status:
 *                 type: string
 *                 enum: ['Publish', 'Draf Redaksi']
 *                 example: "Draf Redaksi"
 *               catagoryId:
 *                 type: string
 *                 example: "f29a5e5c-ec42-4ac6-ae7b-ef3cb8dcf02e"
 *               detail:
 *                 type: object
 *                 properties:
 *                   isiBerita:
 *                     type: string
 *                     example: "Komisi Pemilihan Umum (KPU) Kabupaten Cirebon, Jawa Barat, sudah menerima 1.195 koli surat suara Pemilihan Kepala"
 *                   author:
 *                     type: string
 *                     example: "Rachel Farahdiba Regar"
 *                   editor:
 *                     type: string
 *                     example: "Rachel Farahdiba Regar"
 *     responses:
 *       201:
 *         description: Berita berhasil diperbarui
 *       400:
 *         description: Tidak ada berita dengan id
 */

/**
 * @swagger
 * /app/v1/cms/berita/{id}:
 *   delete:
 *     summary: Hapus berita
 *     description: Menghapus berita berdasarkan ID
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID berita yang akan dihapus
 *         schema:
 *           type: string
 *           example: "2bbc599e-029d-4a39-956e-c537181dd9f7"
 *     responses:
 *       200:
 *         description: Delet successfully
 *       404:
 *         description: Tidak ada berita dengan id
 */
