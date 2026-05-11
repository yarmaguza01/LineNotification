// ฟังก์ชันสร้าง Flex Message สวยงาม
export function buildOrderMessage(order) {
    return {
        type: 'flex',
        altText: `ออเดอร์ใหม่ #${order.id}`,
        contents: {
            type: 'bubble',
            header: {
                type: 'box',
                layout: 'vertical',
                backgroundColor: '#06C755',
                contents: [{
                    type: 'text',
                    text: '🛒 ออเดอร์ใหม่!',
                    color: '#ffffff',
                    weight: 'bold',
                    size: 'lg'
                }]
            },
            body: {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                    { type: 'text', text: `เลขออเดอร์: #${order.id}`, size: 'sm' },
                    { type: 'text', text: `สินค้า: ${order.product}`, size: 'sm' },
                    { type: 'text', text: `ราคา: ${order.price} บาท`, size: 'sm', color: '#E63946', weight: 'bold' },
                    { type: 'text', text: `ชำระ: ${order.payment}`, size: 'sm' }
                ]
            }
        }
    };
}