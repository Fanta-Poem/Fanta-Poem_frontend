import styled from "@emotion/styled";

export const MyPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(
    ellipse at center,
    rgba(75, 27, 112, 1) 0%,
    rgba(48, 23, 66, 1) 50%,
    rgba(34, 22, 43, 1) 75%,
    rgba(20, 20, 20, 1) 100%
  );
  display: flex;
  justify-content: center;
  padding: 45px 80px;
`;

export const MyPageInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  width: 100%;
  max-width: 1280px;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.h1`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: #fafafa;
  margin: 0;
  line-height: normal;
`;

export const TitleHighlight = styled.span`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: #d6bcfa;
  line-height: normal;
`;

export const SearchBar = styled.div`
  width: 477px;
  height: 60px;
  border: 1px solid #7a19c4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 16px;
  align-self: flex-end;
`;

export const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 18px;
  color: white;
  padding: 0 10px;

  &::placeholder {
    color: #c7c7c7;
  }
`;

export const SearchIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:hover {
    background: rgba(122, 25, 196, 0.1);
  }
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const BooksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BookCategory = styled.div`
  border: 1px solid #7a19c4;
  border-radius: 16px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const CategoryTitle = styled.h2`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 32px;
  color: #fafafa;
  margin: 0;
  line-height: normal;
`;

export const CategoryCount = styled.span`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 20px;
  color: #d6bcfa;
  line-height: normal;
`;

export const BookGrid = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 150px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const BookThumbnail = styled.img`
  width: 150px;
  height: 226px;
  object-fit: cover;
  border-radius: 4px;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const BookTitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: white;
  margin: 0;
  line-height: normal;
`;

export const BookAuthor = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 12px;
  color: #c7c7c7;
  margin: 0;
  line-height: normal;
`;

export const AddBookItem = styled.div`
  width: 150px;
  height: 226px;
  background: #2d2d2d;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #3d3d3d;
    transform: translateY(-4px);
  }
`;

export const AddBookPlaceholder = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 72px;
  color: white;
  margin: 0;
  line-height: normal;
`;
