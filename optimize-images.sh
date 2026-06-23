#!/bin/bash

# Script para converter imagens para WebP e AVIF
# Requer: imagemagick (convert), cwebp, avifenc

echo "🖼️  Iniciando otimização de imagens..."

# Criar diretório para imagens otimizadas se não existir
mkdir -p public/images/optimized

# Converter para WebP
echo "📦 Convertendo para WebP..."
for img in public/images/*.{jpg,jpeg,png}; do
  if [ -f "$img" ]; then
    filename=$(basename "$img" | sed 's/\.[^.]*$//')
    cwebp -q 80 "$img" -o "public/images/optimized/${filename}.webp"
    echo "✅ $filename.webp"
  fi
done

# Converter para AVIF (opcional - melhor compressão mas suporte limitado)
echo "📦 Convertendo para AVIF (opcional)..."
for img in public/images/*.{jpg,jpeg,png}; do
  if [ -f "$img" ]; then
    filename=$(basename "$img" | sed 's/\.[^.]*$//')
    if command -v avifenc &> /dev/null; then
      convert "$img" -quality 80 "public/images/optimized/${filename}.avif" 2>/dev/null || true
      echo "✅ $filename.avif"
    fi
  fi
done

echo "✨ Otimização completa!"
echo "📁 Imagens otimizadas em: public/images/optimized/"
echo ""
echo "📝 Próximos passos:"
echo "1. Copiar imagens otimizadas para public/images/"
echo "2. Atualizar componentes com <picture> e srcset"
echo "3. Committar e fazer push"
