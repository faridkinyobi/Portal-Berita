/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Detail:
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
 *         detail:
 *           type: object
 *           properties:
 *             isiBerita:
 *               type: string
 *               example: "Komisi Pemilihan Umum (KPU) Kabupaten Cirebon, Jawa Barat, sudah menerima 1.195 koli surat suara Pemilihan Kepala"
 *             author:
 *               type: string
 *               example: "Rachel Farahdiba Regar"
 *             editor:
 *               type: string
 *               example: "Rachel Farahdiba Regar"
 */
 
/**
 * @swagger
 * /app/v1/cms/detailBerita/{id}:
 *   get:
 *     summary: Detail berita
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: get datail berita berdasarkan id berita
 *         schema:
 *           type: string
 *           example: " "
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan detail berita
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Detail'
 */

/**
 * @swagger
 * /app/v1/cms/searchBerita:
 *   get:
 *     summary: Search berita
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: keyboard
 *         required: false
 *         description: get datail berita berdasarkan keyboard
 *         schema:
 *           type: string
 *           example: "pilkada"
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan detail berita
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Detail'
 *     404:
 *       description: Tidak ada berita yang ditemukan berdasarkan kata kunci
 */
