/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "farid@example.com"
 *         password:
 *           type: string
 *           example: "123"
 *         confirmPassword:
 *           type: string
 *           example: "123"
 *         role:
 *           type: string
 *           enum: ['admin', 'user']
 *           default: 'admin'
 *       required:
 *         - email
 *         - password
 *         - role
 */

/**
 * @swagger
 * /app/v1/cms/signUp:
 *   post:
 *     summary: Register user or admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: registered successfully
 *       400:
 *         description: Password dan confirmPassword tidak cocok
 */

/**
 * @swagger
 * /app/v1/cms/signIn:
 *   post:
 *     summary: Log in a user or admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "farid@example.com"
 *               password:
 *                 type: string
 *                 example: "123"
 *     responses:
 *       200:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 *                 role:
 *                   type: string
 *                   enum: ['admin', 'user']
 *       403:
 *         description: Kredensial Tidak Valid
 *       400:
 *         description: Silakan berikan email dan kata sandi
 */
