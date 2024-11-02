
 
/**
 * @swagger
 * /app/v1/cms/catagoryBerita:
 *   get:
 *     summary: Catagory berita
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Catagory berita
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "politik"
 */


/**
 * @swagger
 * /app/v1/cms/catagoryBerita:
 *   post:
 *     summary: Create catagory Berita
 *     description: Catagory Berita.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "politik" 
 *     responses:
 *       201:
 *         description: Create successfully
 *       400:
 *         description: Catagory Duplicate
 */

/**
 * @swagger
 * /app/v1/cms/catagoryBerita:
 *   put:
 *     summary: Update Catagory 
 *     description: update Catagory Berita.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "politik" 
 *     responses:
 *       201:
 *         description: Update successfully
 *       400:
 *         description: Tidak ada berita dengan id
 */

/**
 * @swagger
 * /app/v1/cms/catagoryBerita/{id}:
 *   delete:
 *     summary: Hapus Catagory
 *     description: Menghapus berita berdasarkan ID
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID catagory yang akan dihapus
 *         schema:
 *           type: string
 *           example: "2bbc599e-029d-4a39-956e-c537181dd9f7"
 *     responses:
 *       200:
 *         description: Delet successfully
 *       404:
 *         description: Tidak ada berita dengan id
 */
