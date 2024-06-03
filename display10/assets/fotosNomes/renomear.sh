#!/bin/bash

# Diretório de destino
dest_dir="../fotos"

# Certifique-se de que o diretório de destino existe, caso contrário, crie-o
mkdir -p "$dest_dir"

# Contador para a sequência numérica
counter=0

# Loop através de todos os arquivos no diretório atual
for file in *; do
  # Verifica se é um arquivo regular e não tem a extensão .sh
  if [ -f "$file" ] && [[ "$file" != *.sh ]]; then
    # Extrai a extensão do arquivo
    extension="${file##*.}"
    
    # Formata o contador como um número de três dígitos
    formatted_counter=$(printf "%d" $counter)
    
    # Nome do novo arquivo em minúsculas
    new_filename=$(echo "${formatted_counter}.${extension}" | tr 'A-Z' 'a-z')
    
    # Copia o arquivo para o diretório de destino com o novo nome
    cp "$file" "$dest_dir/$new_filename"
    
    # Incrementa o contador
    ((counter++))
  fi
done

echo "Arquivos copiados, renomeados e convertidos para minúsculas com sucesso!"

