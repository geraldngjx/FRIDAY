from Questions import *
from transformers import AutoTokenizer, T5Tokenizer,T5ForConditionalGeneration
from Model import *
from Embeddings import *
import sys

CONTEXT_PATH = 'context.txt'

def main(question):
    embeddings = EmbeddingModel(CONTEXT_PATH)
    embeddings.create_mappings()

    trained_model = QandAModel()
    trained_model.eval()
    question = sys.argv[1]
    context = embeddings.get_closest(question)
    answer = generate_answer(trained_model,generate_question(question,context))
    return answer

if __name__ == "__main__":
    question = sys.argv[1]
    main(question)